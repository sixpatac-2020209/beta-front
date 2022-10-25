import { Injectable } from '@angular/core';
import { ImagePosition, Workbook } from 'exceljs';
import * as fs from 'file-saver'
import { logoApp, notFoundImage } from '../../../../assets/img/base64/images'

@Injectable({
  providedIn: 'root'
})
export class ExportExcelOrdenesFabricacionService {

  private _workbook : Workbook = new Workbook;

  downloadExcel(dataExcel : any):void {
    this._workbook = new Workbook();
    this._workbook.creator = 'Vento App'
    this._createTable(dataExcel);
    this._workbook.xlsx.writeBuffer()
      .then(data => {
          const blob = new Blob([data])
          fs.saveAs(blob, 'Ordenes Fabricacion.xlsx')
        })
  }

  private _createTable(dataExcel : any) : void {
    const sheet = this._workbook.addWorksheet('Registros')

    sheet.getColumn("A").width = 2;
    sheet.getColumn("B").width = 10;
    sheet.getColumn("C").width = 15;
    sheet.getColumn("D").width = 25;
    sheet.getColumn("E").width = 25;
    sheet.getColumn("F").width = 15;

    sheet.columns.forEach((column) => {
      column.alignment = {
        vertical: 'middle',
        horizontal: 'center',
        wrapText: true,
      }
    })

    //Insertar El Logo//
    const logoID = this._workbook.addImage({
        base64: logoApp,
        extension: 'png'
      }
    );

    const position: ImagePosition = {
      tl: {col: 1.15, row:1.3},
      ext: {width: 128, height: 128}
    }

    sheet.addImage(logoID, position);

    //Insertamos Un Título//
    const titleCell = sheet.getCell('D4');
    titleCell.value = 'ORDENES DE FABRICACIÓN'
    titleCell.style.font = {
      bold: true,
      size: 24
    }

    //Encabezados//
    const headerRow = sheet.getRow(11);


    headerRow.values = [
      '','#', 'Pedido', 'Cliente', 'Vendedor', 'Planta'
    ]
    headerRow.font = {bold: true, size: 12}

    //Inserción de Data//
    const rowToInsert = sheet.getRows(12, dataExcel.length)!;

    for (let index = 0; index < rowToInsert.length; index++) {
      const itemData = dataExcel[index]
      let row = rowToInsert[index];
      sheet.getCell(`B${row.number+0}`).border = {left:{style:'thin'}}

      row.values = [
        '',
        itemData.position,
        itemData.CVE_PEDIDO,
        itemData.CLIENTE,
        itemData.VENDEDOR,
        itemData.ID_PLANTA,
      ]
      if(itemData.image) {
        const imageID = this._workbook.addImage(
          {
            base64: itemData.imageBase64,
            extension: 'png'
          })

        const positionIMG: ImagePosition =
          {
            tl: {col: 2.3, row: row.number -0.5},
            ext: {width: 109, height: 110}
          }
        sheet.addImage(imageID, positionIMG);

        row.height = 92
      } else {
        const imageID = this._workbook.addImage({
            base64: notFoundImage,
            extension: 'png'
          }
        );

        const positionIMG: ImagePosition = {
          tl: {col: 2.3, row: row.number -0.5},
          ext: {width: 109, height: 110}
        }
        sheet.addImage(imageID, positionIMG);
        row.height = 92
      }
    }
  }

  private async _getIdImage(url: string): Promise<number> {
    const splitFile = url.split('.')
    const response = await fetch(url);
    const image = this._workbook.addImage({
      buffer: await response.arrayBuffer(),
      extension: 'png'
    });
    return image;
  }

  constructor() { }
}
