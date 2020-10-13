import { CommonModule, registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeFr from "@angular/common/locales/fr";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GoogleAddressPipe } from "./match/google-address.pipe";
import { MatchComponent } from "./match/match.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
registerLocaleData(localeFr);
@NgModule({
  declarations: [AppComponent, MatchComponent, GoogleAddressPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    GoogleAddressPipe,
    {
      provide: LOCALE_ID,
      useValue: "fr-FR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
