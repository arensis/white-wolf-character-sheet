import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './shared/services/i18n.service';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'white-wolf-character-sheet';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private i18nService: I18nService, private translateService: TranslateService){
    this.matIconRegistry.addSvgIcon(
      `github_icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgIcons/github-brands.svg"));
    this.i18nService.init('es', ['es', 'en']);
  }

  ngOnInit(): void {

  }
}
