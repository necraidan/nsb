import { Component, Input } from '@angular/core';
import { Match } from '../app.model';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  @Input() match: Match;

  constructor() {}
}
