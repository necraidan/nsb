import { Pipe, PipeTransform } from "@angular/core";

// https://www.google.com/maps/search/COMPLEXE+SPORTS+ALAIN+BURBAN+Avenue+du+Bois+Robin+44500+-+La+Baule-Escoublac/

@Pipe({ name: "googleAddress" })
export class GoogleAddressPipe implements PipeTransform {
  transform(adress: string) {
    return `https://www.google.com/maps/search/${adress.split(" ").join("+")}`;
  }
}
