import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  generateIncidenciasPDF(data: any[]) {
    // Columnas
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

    // estilos  el documento PDF
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

    pdfMake.createPdf(docDefinition).download('registro_incidencias.pdf');
  }

  generateGuardiasPDF(data: any[]) {
    // Columnas
    const columns = [
      'Comentario',
      'Fecha',
      'Hora Inicio',
      'Hora Fin',
      'Usuario',
      'Grupo',
    ];

    const tableBody = [
      columns.map((col) => ({ text: col, style: 'tableHeader' })),
    ];

    // Agrega los datos
    data.forEach((row: any) => {
      tableBody.push([
        row.comentario,
        row.fecha,
        row.horaInicio,
        row.horaFin,
        `${row.usuario.nombre} ${row.usuario.apellidos}`,
        row.grupo.nombre,
      ]);
    });

    const pdfContent = [
      { text: 'Registro de Guardias Localizadas', style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: columns.map(() => 'auto'),
          body: tableBody,
        },
      },
    ];

    // Estilos y generar el  PDF
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

    pdfMake
      .createPdf(docDefinition)
      .download('registro_guardias_localizadas.pdf');
  }
}
