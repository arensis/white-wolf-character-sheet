import { TranslateService } from '@ngx-translate/core';
import { StyleManagerService } from './../../services/style-manager.service';
import { SafeUrl } from '@angular/platform-browser';
import { DownloadFile } from './../../model/DownloadFile';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Component({
  selector: 'arm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  characterSheet!: VampireDarkAgesSheet;
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

  constructor(private sanitizer: DomSanitizer, private styleManagerService: StyleManagerService, private translate: TranslateService) {
    this.downloadFile = {} as DownloadFile;
    this.gameName = '';
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
