import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'googleAddress' })
export class GoogleAddressPipe implements PipeTransform {
  transform(address: string) {
    return `https://www.google.com/maps/search/${address.split(' ').join('+')}`;
  }
}
