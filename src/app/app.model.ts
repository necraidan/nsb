export interface Match {
  phase: string;
  numero: number;
  domicile: Team;
  visiteur: Team;
  heure: string;
  date: string | Date;
  adresse: string;
  selected?: boolean;
}

export interface Team {
  name: string;
  id: string;
}
