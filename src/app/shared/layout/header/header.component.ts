import { TranslateService } from '@ngx-translate/core';
import { StyleManagerService } from './../../services/style-manager.service';
import { SafeUrl } from '@angular/platform-browser';
import { DownloadFile } from './../../model/DownloadFile';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Sheet } from 'src/app/shared/model/sheet/Sheet';

/** Route of each game's character creator, keyed by the gameName input. */
const CREATOR_ROUTES: Record<string, string> = {
  VAMPIRE_DARK_AGES: '/vampire-dark-ages/create',
  VAMPIRE_MASQUERADE: '/vampire-the-masquerade/create',
};

@Component({
  selector: 'arm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Input()
  characterSheet!: Sheet;
  @Input()
  gameName: string;
  @Input()
  isEditable: boolean = true;

  @Output()
  onClearSheet = new EventEmitter<void>();
  @Output()
  onUploadSheet = new EventEmitter<any>();
  @Output()
  onToggleLockEdition = new EventEmitter<void>();

  darkMode = this.styleManagerService.isDark
  downloadFile: DownloadFile;

  constructor(private sanitizer: DomSanitizer, private styleManagerService: StyleManagerService, private translate: TranslateService, private router: Router) {
    this.downloadFile = {} as DownloadFile;
    this.gameName = '';
  }

  get hasCreator(): boolean {
    return !!CREATOR_ROUTES[this.gameName];
  }

  ngOnChanges() {
    this.buildDownloadResources();
  }

  clearSheet(): void {
    this.onClearSheet.emit();
  }

  uploadSheet(file: any): void {
    this.onUploadSheet.emit(file);
  }

  toggleLockEdition(): void {
    this.onToggleLockEdition.emit();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goToCreator(): void {
    const route = CREATOR_ROUTES[this.gameName];
    if (route) {
      this.router.navigate([route]);
    }
  }

  changeThemMode(): void {
    this.styleManagerService.toggleDarkTheme();
    this.darkMode = !this.darkMode;
  }

  private buildDownloadResources(): void {
    var jsonCharacterSheet = JSON.stringify(this.characterSheet);
    this.downloadFile.uri = this.buildDownloadUri(jsonCharacterSheet);;
    this.downloadFile.name = this.buildFileName();;
  }

  private buildDownloadUri(jsonCharacterSheet: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonCharacterSheet));
  }

  private buildFileName(): string {
    return this.gameName + '_' + this.formatDateString(new Date().toLocaleString()).concat('.json');
  }

  private formatDateString(dateString: string): string {
    return dateString.replace('/', '_').replace('/', '_').replace(', ', 'T');
  }
}
