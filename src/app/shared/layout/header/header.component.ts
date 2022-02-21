import { SafeUrl } from '@angular/platform-browser';
import { DownloadFile } from './../../model/DownloadFile';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'arm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  characterSheet: any;
  @Input()
  gameName: string;

  @Output()
  onClearSheet = new EventEmitter<void>();
  @Output()
  onUploadSheet = new EventEmitter<any>();

  downloadFile: DownloadFile;

  constructor(private sanitizer: DomSanitizer) {
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
