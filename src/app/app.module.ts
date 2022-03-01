import { I18nService } from './shared/services/i18n.service';
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
    TranslateModule,
    TranslateModule.forRoot()
  ],
  providers: [
    I18nService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
