import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPedido'
})
export class SearchPedidoPipe implements PipeTransform {

  transform(pedidos:any, search:any){
    if(search == undefined){
      return pedidos;

    }else{
      return pedidos.filter( (pedido:any) => {
        return pedido.CVE_DOC.toLowerCase().includes(search.toLowerCase());

      })
    }
  }

}
