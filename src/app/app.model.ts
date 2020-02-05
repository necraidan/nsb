export interface Match {
  phase: string;
  numero: number;
  domicile: string;
  visiteur: string;
  heure: string;
  date: string | Date;
  adresse: string;
  selected?: boolean;
}
