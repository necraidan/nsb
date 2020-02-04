export interface Match {
  phase: string;
  numero: number;
  domcilie: string;
  visiteur: string;
  heure: string;
  date: string | Date;
  adresse: string;
  selected?: boolean;
}
