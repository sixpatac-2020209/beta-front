import { Injectable } from '@angular/core';
import { ImagePosition, Workbook } from 'exceljs';
import * as fs from 'file-saver'
import { logoApp, notFoundImage } from '../../../../assets/img/base64/images'


@Injectable({
  providedIn: 'root'
})
export class ExportExcelOrdenService {

  private _workbook: Workbook = new Workbook;

  downloadExcel(dataExcel: any): void {
    this._workbook = new Workbook();
    this._workbook.creator = 'Vento App'
    this._createTable(dataExcel);
    this._workbook.xlsx.writeBuffer()
      .then(data => {
        const blob = new Blob([data])
        fs.saveAs(blob, 'Ordenes de Produccion.xlsx')
      })
  }

  private _createTable(dataExcel: any): void {
    const sheet = this._workbook.addWorksheet('Registros')

    sheet.getColumn("A").width = 15;
    sheet.getColumn("B").width = 10;
    sheet.getColumn("C").width = 20;
    sheet.getColumn("D").width = 20;
    sheet.getColumn("E").width = 20;
    sheet.getColumn("F").width = 20;
    sheet.getColumn("G").width = 20;
    sheet.getColumn("H").width = 20;
    sheet.getColumn("I").width = 20;
    sheet.getColumn("J").width = 20;

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
      tl: { col: 1.15, row: 1.3 },
      ext: { width: 128, height: 128 }
    }

    sheet.addImage(logoID, position);

    //Insertamos Un Título//
    const titleCell = sheet.getCell('D4');
    titleCell.value = 'Ordenes de Producción'
    titleCell.style.font = {
      bold: true,
      size: 24
    }

    //Encabezados//
    const headerRow = sheet.getRow(11);


    headerRow.values = [
      '', '#', 'CVE_ORDEN', 'CVE_PEDIDO', 'CLIENTE', 'FECHA_INGRESO', 'FECHA_TERMINA', 'VENDEDOR', 'ID_SEDE', 'SERIE'
    ]
    headerRow.font = { bold: true, size: 12 }

    //Inserción de Data//
    const rowToInsert = sheet.getRows(12, dataExcel.length)!;

    for (let index = 0; index < rowToInsert.length; index++) {
      const itemData = dataExcel[index]
      let row = rowToInsert[index];
      sheet.getCell(`B${row.number + 0}`).border = { left: { style: 'thin' } }

      row.values = [
        '',
        itemData.position,
        itemData.CVE_ORDEN,
        itemData.CVE_PEDIDO,
        itemData.CLIENTE,
        itemData.FECHA_INGRESO,
        itemData.FECHA_TERMINA,
        itemData.VENDEDOR,
        itemData.ID_SEDE,
        itemData.SERIE
      ]
    }
  }
  constructor() { }
}
