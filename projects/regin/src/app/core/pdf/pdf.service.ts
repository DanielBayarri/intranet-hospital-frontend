import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  generatePDF(data: any[]) {
    // Columnas de la tabla
    const columns = [
      'Título',
      'Fecha',
      'Comentario',
      'Grupo',
      'Hora Inicio',
      'Subtipo',
      'Tipo',
      'Turno',
      'Usuario',
    ];

    // Cuerpo de la tabla
    const tableBody = [
      columns.map((col) => ({ text: col, style: 'tableHeader' })),
    ];

    // Agrega los datos
    data.forEach((row: any) => {
      tableBody.push([
        row.titulo,
        row.fecha,
        row.comentario,
        row.grupo.nombre,
        row.horaInicio,
        row.subtipo.nombre,
        row.tipo.nombre,
        row.turno.nombre,
        `${row.usuario.nombre} ${row.usuario.apellidos}`,
      ]);
    });

    const pdfContent = [
      { text: 'Registro de incidencias', style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: columns.map(() => 'auto'),
          body: tableBody,
        },
      },
    ];

    // Define estilos y genera el documento PDF
    const docDefinition: any = {
      content: pdfContent,
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 10],
          color: '#0d9488',
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          color: 'white',
          fillColor: '#0d9488',
        },
      },
      defaultStyle: {
        fontSize: 7,
      },
      pageSize: 'A4',
      pageMargins: [20, 30, 20, 30],
    };

    // Usa pdfMake para generar el PDF
    pdfMake.createPdf(docDefinition).download('registro_incidencias.pdf');
  }
}
