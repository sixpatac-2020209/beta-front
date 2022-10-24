import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAutorization'
})
export class SearchAutorizationPipe implements PipeTransform {

  transform(ordenes: any, search: any) {
    if (search == undefined) {
      return ordenes;

    } else {
      return ordenes.filter((orden: any) => {
        return orden.CVE_PEDIDO.toLowerCase().includes(search.toLowerCase());

      })
    }
  }

}
