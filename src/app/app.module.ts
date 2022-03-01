import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

export function onAppInit(translate: TranslateService) {
  return () => {
    const browserLang = translate.getBrowserLang() || '';
    let storedLang = localStorage.getItem('LANG');
    translate.addLangs(['es', 'en']);

    if(storedLang) {
      translate.setDefaultLang(storedLang);
    } else {
      const defaultLang = browserLang.match(/es|en/) ? browserLang : 'es';

      localStorage.setItem('LANG', defaultLang);
      document.documentElement.setAttribute("lang", defaultLang);
      translate.setDefaultLang(defaultLang);
    }
  }
}

export function HttpLoaderFactory(http: HttpClient) {
return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'es'
  })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
