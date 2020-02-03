import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Match } from "./app.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "nsb-match";

  matches$ = new BehaviorSubject<Match[]>(null);

  constructor(private http: HttpClient) {
    this.http.get("./assets/data.json").subscribe((val: Match[]) => {
      console.log(this.selectNextMatch(val));
      this.matches$.next(this.selectNextMatch(val));
    });
  }

  private selectNextMatch(matches: Match[]) {
    let alreadySelected = false;

    return matches.map((m: Match) => {
      if (!alreadySelected && new Date(m.date) <= new Date()) {
        m.selected = true;
        alreadySelected = true;
      }

      return m;
    });
  }
}
