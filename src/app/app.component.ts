import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { Match } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nsb-match';

  matches$ = new BehaviorSubject<Match[]>(null);

  constructor(private http: HttpClient, private swUpdate: SwUpdate) {
    this.http.get('./assets/data.json').subscribe((val: Match[]) => {
      console.log(this.selectNextMatch(val));

      this.matches$.next(this.selectNextMatch(this.parseDate(val)));
    });
  }

  ngOnInit(): void {
    console.log(this);
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("Nouvelle version disponible. Voulez-vous recharger l'app ?")) {
          window.location.reload();
        }
      });
    }
  }

  private selectNextMatch(matches: Match[]) {
    let alreadySelected = false;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return matches.map((m: Match) => {
      if (!alreadySelected && m.date >= yesterday) {
        m.selected = true;
        alreadySelected = true;
      }

      return m;
    });
  }

  private parseDate(matches: Match[]): Match[] {
    return matches.map((m: Match) => {
      let parseDate = (m.date as string).split('/');

      m.date = new Date(parseInt(parseDate[2], 10), parseInt(parseDate[1], 10) - 1, parseInt(parseDate[0], 10));

      return m;
    });
  }
}
