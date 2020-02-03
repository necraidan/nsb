import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { GoogleAddressPipe } from "./match/google-address.pipe";
import { MatchComponent } from "./match/match.component";

@NgModule({
  declarations: [AppComponent, MatchComponent, GoogleAddressPipe],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [GoogleAddressPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
