export interface Menu {
  id?: number;
  label?: string;
  profiles?: string[];
  icon?: string;
  menu?: Array<Menu>;
  routerLink?: string,
  externalUrl?: string
}
