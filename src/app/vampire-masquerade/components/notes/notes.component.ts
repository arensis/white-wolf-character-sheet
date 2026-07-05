import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { Editor, Toolbar } from 'ngx-editor';
import { VampireMasqueradeSheetStoreService } from 'src/app/vampire-masquerade/services/vampire-masquerade-sheet-store.service';
import { VampireMasqueradeSheet } from '../../model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';

const ALLOWED_URL_SCHEMES = /^(https?:\/\/|mailto:)/i;

@Component({
  selector: 'arm-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  @Input()
  characterSheet: VampireMasqueradeSheet = {} as VampireMasqueradeSheet;

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ heading: ['h2', 'h3', 'h4'] }],
    ['ordered_list', 'bullet_list'],
    ['blockquote', 'horizontal_rule'],
    ['link'],
    ['align_left', 'align_center', 'align_right'],
  ];
  notesDoc: Record<string, any> | null = null;

  private sheetSubscription?: Subscription;

  constructor(private vampireVTMSheetStoreService: VampireMasqueradeSheetStoreService) {}

  ngOnInit(): void {
    this.editor = new Editor();
    this.sheetSubscription = this.vampireVTMSheetStoreService
      .selectVampireVTMSheet()
      .subscribe((sheet: VampireMasqueradeSheet) => {
        this.characterSheet = sheet;
        const incoming = this.sanitizeDoc(sheet.notes ?? null);
        if (!_.isEqual(incoming, this.notesDoc)) {
          this.notesDoc = incoming;
        }
      });
  }

  ngOnDestroy(): void {
    this.sheetSubscription?.unsubscribe();
    this.editor?.destroy();
  }

  onNotesChange(doc: Record<string, any> | null): void {
    this.notesDoc = doc;
    const sheet = _.cloneDeep(this.characterSheet);
    sheet.notes = doc;
    this.vampireVTMSheetStoreService.loadVampireVTMSheet(sheet);
  }

  // El doc se valida contra el schema de ProseMirror al cargarse (whitelist de
  // nodos/marcas), pero el schema no restringe los esquemas de URL: aquí se
  // eliminan enlaces e imágenes cuyo destino no sea http(s)/mailto.
  private sanitizeDoc(doc: Record<string, any> | null): Record<string, any> | null {
    if (!doc || typeof doc !== 'object') {
      return null;
    }
    return this.sanitizeNode(_.cloneDeep(doc));
  }

  private sanitizeNode(node: any): any {
    if (!node || typeof node !== 'object') {
      return node;
    }

    if (node.type === 'image' && !this.isSafeUrl(node.attrs?.src)) {
      return null;
    }

    if (Array.isArray(node.marks)) {
      node.marks = node.marks.filter((mark: any) =>
        mark?.type !== 'link' || this.isSafeUrl(mark.attrs?.href)
      );
    }

    if (Array.isArray(node.content)) {
      node.content = node.content
        .map((child: any) => this.sanitizeNode(child))
        .filter((child: any) => child !== null);
    }

    return node;
  }

  private isSafeUrl(url: unknown): boolean {
    return typeof url === 'string' && ALLOWED_URL_SCHEMES.test(url);
  }
}
