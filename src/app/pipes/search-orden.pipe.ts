import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOrden'
})
export class SearchOrdenPipe implements PipeTransform {

  transform(ordens: any, search: any) {
    if (search == undefined) {
      return ordens;

    } else {
      return ordens.filter((orden: any) => {
        return orden.CVE_PEDIDO.toLowerCase().includes(search.toLowerCase());

      })
    }
  }

}
