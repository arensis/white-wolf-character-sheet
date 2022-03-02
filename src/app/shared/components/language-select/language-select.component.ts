import { I18nService } from './../../services/i18n.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arm-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {
  selectedLanguage: string = '';

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('lang') || '';
  }

  valueChange(selectedLanguage: string) {
    this.selectedLanguage = selectedLanguage;
    localStorage.setItem('lang', selectedLanguage);
    document.documentElement.setAttribute("lang", selectedLanguage);
    this.translateService.use(selectedLanguage);
  }
}
