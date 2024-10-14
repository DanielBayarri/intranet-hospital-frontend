export interface Telefono {
  nombre: string;
  telefono: string;
}

export interface Departamento {
  nombre_departamento: string;
  telefonos: Telefono[];
}

export interface TelefonosList {
  departamentos: Departamento[];
}

export const TelefonosList = {
  departamentos: [
    {
      nombre_departamento: 'INFORMACIÓN',
      telefonos: [
        {
          nombre: 'Información',
          telefono: '455 070',
        },
      ],
    },
    {
      nombre_departamento: 'ADMINISTRACIÓN',
      telefonos: [
        {
          nombre: 'Amparo Monzonis',
          telefono: '376 119',
          servicio: 'Gestión presupuestaria',
        },
        {
          nombre: 'Aurelio',
          telefono: '376 121',
          servicio: 'Gestión presupuestaria',
        },
        {
          nombre: 'Carlos',
          telefono: '376 273',
          servicio: 'Gestión presupuestaria',
        },
        {
          nombre: 'Paloma',
          telefono: '376 128',
          servicio: 'Gestión presupuestaria',
        },
        {
          nombre: 'Miguel',
          telefono: '455 156',
          servicio: 'Gestión presupuestaria',
        },
        {
          nombre: 'Lola/Juan',
          telefono: '376 122',
          servicio: 'Contabilidad',
        },
        {
          nombre: 'Lidón Vilar',
          telefono: '376 247',
          servicio: 'Contratación',
        },
        {
          nombre: 'Carmen Gumbau',
          telefono: '376 120',
          servicio: 'Contratación',
        },
        {
          nombre: 'Claudia Orts',
          telefono: '376 135',
          servicio: 'Contratación',
        },
        {
          nombre: 'M.ª José Saura',
          telefono: '376 248',
          servicio: 'Contratación',
        },
        {
          nombre: 'Negociado A. quirúrgica',
          telefono: '376 237',
          servicio: 'Negociado A. quirúrgica',
        },
        {
          nombre: 'Pilar Aibar',
          telefono: '376 013',
          servicio: 'Facturación',
        },
        {
          nombre: 'Juan Diego',
          telefono: '376 014',
          servicio: 'Facturación',
        },
        {
          nombre: 'Javier',
          telefono: '376 015',
          servicio: 'Facturación',
        },
        {
          nombre: 'Mar',
          telefono: '376 233',
          servicio: 'Personal',
        },
        {
          nombre: 'Jordi',
          telefono: '376 124',
          servicio: 'Personal',
        },
        {
          nombre: 'Cristina',
          telefono: '455 282',
          servicio: 'Personal',
        },
        {
          nombre: 'Elena',
          telefono: '455 149',
          servicio: 'Personal',
        },
        {
          nombre: 'Rebeca',
          telefono: '376 137',
          servicio: 'Personal',
        },
        {
          nombre: 'Jose Antonio',
          telefono: '376 123',
          servicio: 'Nóminas',
        },
        {
          nombre: 'Sonia',
          telefono: '376 126',
          servicio: 'Nóminas',
        },
        {
          nombre: 'M.ª José Signes',
          telefono: '455 330',
          servicio: 'RRHH',
        },
        {
          nombre: 'Miguel',
          telefono: '455 344',
          servicio: 'RRHH',
        },
      ],
    },
    {
      nombre_departamento: 'ADMISIONES',
      telefonos: [
        {
          nombre: 'Ad. Central Ani',
          telefono: '376 200',
        },
        {
          nombre: 'Admisión',
          telefono: '376 202',
        },
        {
          nombre: 'Fax Admisiones',
          telefono: '(964) 376 201',
        },
      ],
    },
    {
      nombre_departamento: 'ARCHIVO (U.D.C.A.)',
      telefonos: [
        {
          nombre: 'Jorge Renau',
          telefono: '455 323',
        },
        {
          nombre: 'M.ª Luisa España',
          telefono: '455 072',
        },
        {
          nombre: 'Documentación – Informes médicos',
          telefono: '376 209',
        },
        {
          nombre: 'Estadística: Salva',
          telefono: '376 184',
        },
      ],
    },
    {
      nombre_departamento: 'BRAQUITERAPIA',
      telefonos: [
        {
          nombre: 'Control Enfermería',
          telefono: '376 090',
        },
        {
          nombre: 'Enfermería',
          telefono: '455 296',
        },
        {
          nombre: 'Radiofísica (Braquiterapia)',
          telefono: '455 297',
        },
      ],
    },
    {
      nombre_departamento: 'CAFETERÍA',
      telefonos: [
        {
          nombre: 'Cafetería',
          telefono: '(964) 200 202',
        },
      ],
    },
    {
      nombre_departamento: 'CALIDAD',
      telefonos: [
        {
          nombre: 'Dr. Juliani',
          telefono: '376 173',
        },
        {
          nombre: 'Eva Felip',
          telefono: '376 179',
        },
      ],
    },
    {
      nombre_departamento: 'CIRUGÍA - CONSULTAS',
      telefonos: [
        {
          nombre: 'Citación',
          telefono: '376 203',
        },
        {
          nombre: 'Mostrador',
          telefono: '455 024',
        },
        {
          nombre: 'Cirugía 1',
          telefono: '455 020',
        },
        {
          nombre: 'Cirugía 2',
          telefono: '455 022',
        },
        {
          nombre: 'Cirugía 3',
          telefono: '455 018',
        },
        {
          nombre: 'Cirugía 4',
          telefono: '455 026',
        },
        {
          nombre: 'Trauma 1 – (Dr. Oliver)',
          telefono: '376 148',
        },
        {
          nombre: 'Trauma 2 – (Drs. Ballester, Broch)',
          telefono: '455 029',
        },
        {
          nombre: 'Trauma 3 – (Drs. Berrocal, Verdoy)',
          telefono: '455 023',
        },
        {
          nombre: 'Trauma 4 – (Dra. Peralta)',
          telefono: '455 028',
        },
        {
          nombre: 'Consulta de Anestesia',
          telefono: '455 280',
        },
        {
          nombre: 'Preoperatorio',
          telefono: '455 019',
        },
      ],
    },
    {
      nombre_departamento: 'CIRUGÍA - PLANTA',
      telefonos: [
        {
          nombre: 'Cirugía A (Gine-Trauma-Urología)',
          telefono: '376 250',
        },
        {
          nombre: 'Cirugía B (Cirugía - Oftalmología)',
          telefono: '376 251',
        },
        {
          nombre: 'Administrativa',
          telefono: '376 237',
        },
        {
          nombre: 'Dr. Boldó',
          telefono: '455 033',
        },
        {
          nombre: 'Cirugía (Desp.1)',
          telefono: '455 259',
        },
        {
          nombre: 'Cirugía (Desp.2)',
          telefono: '455 098',
        },
      ],
    },
    {
      nombre_departamento: 'CIRUGÍA PLÁSTICA Y RECONSTRUCTIVA',
      telefonos: [
        {
          nombre: 'Dr. Aracil – (Dr. de Francia)',
          telefono: '455 020',
        },
      ],
    },
    {
      nombre_departamento: 'COMUNICACIÓN',
      telefonos: [
        {
          nombre: 'Carmen Castillo',
          telefono: '376 105',
        },
      ],
    },
    {
      nombre_departamento: 'DIETÉTICA',
      telefonos: [
        {
          nombre: 'Cocina',
          telefono: '455 121',
        },
        {
          nombre: 'Dietética despacho',
          telefono: '455 338',
        },
        {
          nombre: 'Citación consultas',
          telefono: '376 180',
        },
        {
          nombre: 'CEX Dietética',
          telefono: '455 155',
        },
        {
          nombre: 'Dietista',
          telefono: '497 793',
        },
      ],
    },
    {
      nombre_departamento: 'GERENCIA',
      telefonos: [
        {
          nombre: 'Dtor. Gerente',
          telefono: '376 104',
        },
        {
          nombre: 'Fax Dirección',
          telefono: '(964) 376 101',
        },
        {
          nombre: 'Secretaria Dirección Amparo',
          telefono: '376 100',
        },
      ],
    },
    {
      nombre_departamento: 'DIRECCIÓN',
      telefonos: [
        {
          nombre: 'Dir. Económica',
          telefono: '376 097',
        },
        {
          nombre: 'Dir. Enfermería',
          telefono: '376 096',
        },
        {
          nombre: 'Dir. Médico',
          telefono: '376 198',
        },
        {
          nombre: 'Secretaria Dirección',
          telefono: '376 106',
        },
      ],
    },
    {
      nombre_departamento: 'ESTERILIZACIÓN',
      telefonos: [
        {
          nombre: 'Esterilización 1',
          telefono: '455 347',
        },
        {
          nombre: 'Esterilización 2',
          telefono: '455 268',
        },
      ],
    },
    {
      nombre_departamento: 'FARMACIA',
      telefonos: [
        {
          nombre: 'Unidosis',
          telefono: '455 010',
        },
        {
          nombre: 'Administrativa',
          telefono: '376 132',
        },
        {
          nombre: 'Campana quimio',
          telefono: '455 185',
        },
        {
          nombre: 'Farmacéuticos Consulta',
          telefono: '376 136',
        },
        {
          nombre: 'Farmacéuticos',
          telefono: '376 144',
        },
        {
          nombre: 'Farmacéutica ensayos',
          telefono: '376 191',
        },
        {
          nombre: 'Consulta Externa UFPE',
          telefono: '455 186',
        },
        {
          nombre: 'Super/Dispensación Externa',
          telefono: '455 134',
        },
      ],
    },
    {
      nombre_departamento: 'MEDICINA NUCLEAR',
      telefonos: [
        {
          nombre: 'Mostrador',
          telefono: '376 139',
        },
        {
          nombre: 'PET-TC',
          telefono: '376 091',
        },
        {
          nombre: 'Gammacámara 1',
          telefono: '376 225',
        },
        {
          nombre: 'SPET-TC',
          telefono: '376 254',
        },
        {
          nombre: 'MDN 1',
          telefono: '455 346',
        },
        {
          nombre: 'MDN 2',
          telefono: '455 080',
        },
        {
          nombre: 'MDN 3',
          telefono: '455 081',
        },
        {
          nombre: 'Dr. Tajahuerce',
          telefono: '455 089',
        },
      ],
    },
    {
      nombre_departamento: 'LABORATORIOS',
      telefonos: [
        {
          nombre: 'Análisis Clínicos',
          telefono: '376 094',
        },
        {
          nombre: 'Análisis Clínicos (Hormonas)',
          telefono: '455 065',
        },
        {
          nombre: 'Análisis Clínicos (Analista)',
          telefono: '455 290',
        },
        {
          nombre: 'Microbiología (Técnico)',
          telefono: '455 193',
        },
        {
          nombre: 'Microbiología',
          telefono: '455 293',
        },
        {
          nombre: 'Microbiología (despacho)',
          telefono: '455 341',
        },
        {
          nombre: 'Anatomía Patológica (Administrativo)',
          telefono: '455 062',
        },
        {
          nombre: 'Anatomía Patológica (Laboratorio)',
          telefono: '455 061',
        },
        {
          nombre: 'Anatomopatólogos',
          telefono: '455 275',
        },
        {
          nombre: 'Extracciones (Administrativas)',
          telefono: '376 174',
        },
        {
          nombre: 'Extracciones (Sala distribución)',
          telefono: '455 064',
        },
        {
          nombre: 'Extracciones Despacho Hematóloga',
          telefono: '455 294',
        },
      ],
    },
    {
      nombre_departamento: 'MEDICINA INTERNA',
      telefonos: [
        {
          nombre: 'Control Enfermería',
          telefono: '376 260',
        },
        {
          nombre: 'Administrativa',
          telefono: '376 255',
        },
        {
          nombre: 'Jefe Servicio',
          telefono: '376 134',
        },
        {
          nombre: 'Despacho Médicos',
          telefono: '376 261',
        },
        {
          nombre: 'Hospital de día médico',
          telefono: '376 133',
        },
        {
          nombre: 'Super',
          telefono: '497 763',
        },
      ],
    },
    {
      nombre_departamento: 'MEDICINA LEGAL',
      telefonos: [
        {
          nombre: 'Administrativo',
          telefono: '964 245 770',
        },
        {
          nombre: 'Medicina Legal',
          telefono: '964 247 150',
        },
      ],
    },
    {
      nombre_departamento: 'MEDICINA DEPORTIVA',
      telefonos: [
        {
          nombre: 'Dr. Molés',
          telefono: '376 145',
        },
        {
          nombre: 'Ondas de Choque',
          telefono: '455 340',
        },
        {
          nombre: 'Dra. Beltrán',
          telefono: '376 146',
        },
        {
          nombre: 'Pruebas esfuerzo',
          telefono: '376 147',
        },
        {
          nombre: 'Citación',
          telefono: '376 014',
        },
      ],
    },
    {
      nombre_departamento: 'ONCOLOGÍA - CONSULTAS',
      telefonos: [
        {
          nombre: 'Citación 1',
          telefono: '376 140',
        },
        {
          nombre: 'Citación 2',
          telefono: '376 150',
        },
        {
          nombre: 'Consulta 58 (1ºPiso)',
          telefono: '455 320',
        },
        {
          nombre: 'Consulta 61 (1ºPiso)',
          telefono: '455 258',
        },
        {
          nombre: 'Consulta 69 (Residente)',
          telefono: '455 257',
        },
        {
          nombre: 'Consulta 71',
          telefono: '376 154',
        },
        {
          nombre: 'Consulta 72',
          telefono: '376 155',
        },
        {
          nombre: 'Consulta 73',
          telefono: '455 075',
        },
        {
          nombre: 'Consulta 74',
          telefono: '376 152',
        },
        {
          nombre: 'Consulta 75',
          telefono: '455 281',
        },
        {
          nombre: 'Consulta 76',
          telefono: '455 016',
        },
        {
          nombre: 'Consulta 77 B',
          telefono: '376 167',
        },
        {
          nombre: 'Consulta 83 – Consejo genético',
          telefono: '376 189',
        },
        {
          nombre: 'Auxiliar Consejo genético',
          telefono: '376 186',
        },
        {
          nombre: 'Consulta de Enfermería',
          telefono: '376 153',
        },
      ],
    },
    {
      nombre_departamento: 'ONCOLOGÍA - PLANTA',
      telefonos: [
        {
          nombre: 'Control Enfermería',
          telefono: '376 256',
        },
        {
          nombre: 'Administrativo 1',
          telefono: '376 255',
        },
        {
          nombre: 'Administrativo 2',
          telefono: '376 206',
        },
        {
          nombre: 'Despachos médicos',
          telefono: '376 259',
        },
        {
          nombre: 'Despachos médicos (Alternativo)',
          telefono: '455 116',
        },
        {
          nombre: 'Psiconcología (Pilar Peris)',
          telefono: '376 197',
        },
        {
          nombre: 'Psiconcología (MªJosé Gallego)',
          telefono: '376 249',
        },
        {
          nombre: 'Jefe de servicio',
          telefono: '455 025',
        },
      ],
    },
    {
      nombre_departamento: 'PREVENCIÓN DE RIESGOS LABORALES',
      telefonos: [
        {
          nombre: 'Administrativa',
          telefono: '376 235',
        },
        {
          nombre: 'Prevención: Dra. Gloria Bernat',
          telefono: '376 235',
        },
        {
          nombre: 'Roger Sanchordi',
          telefono: '497 786',
        },
        {
          nombre: 'Alejandro Díaz',
          telefono: '497 787',
        },
        {
          nombre: 'Salud Laboral: Dra. Inma Rubert',
          telefono: '455 190',
        },
        {
          nombre: 'Javier Roy',
          telefono: '455 191',
        },
      ],
    },
    {
      nombre_departamento: 'URGENCIAS',
      telefonos: [
        {
          nombre: 'Admisión Urgencias',
          telefono: '376 204',
        },
        {
          nombre: 'Coordinador',
          telefono: '455 160',
        },
        {
          nombre: 'Sala exploración A',
          telefono: '455 299',
        },
        {
          nombre: 'Despacho Médico B',
          telefono: '376 165',
        },
        {
          nombre: 'Despacho Enfermería B',
          telefono: '455 350',
        },
        {
          nombre: 'Médico Psiquiatra de guardia',
          telefono: '376 208',
        },
        {
          nombre: 'Recepción - Celadores',
          telefono: '455 161',
        },
        {
          nombre: 'Jefe guardia',
          telefono: '497 847',
        },
        {
          nombre: 'Médico Urgencias',
          telefono: '497 846',
        },
        {
          nombre: 'Supervisor/a',
          telefono: '497 778',
        },
        {
          nombre: 'Fax Urgencias',
          telefono: '(964) 376 178',
        },
      ],
    },
    {
      nombre_departamento: 'RADIODIAGNÓSTICO',
      telefonos: [
        {
          nombre: 'Citación 1 (Rayos X, ECO, Mamo, Densitometría)',
          telefono: '376 220',
        },
        {
          nombre: 'Citación 2 (TAC)',
          telefono: '455 311',
        },
        {
          nombre: 'Densitometría',
          telefono: '376 238',
        },
        {
          nombre: 'Jefe Área',
          telefono: '376 216',
        },
        {
          nombre: 'Ecografía 1',
          telefono: '376 221',
        },
        {
          nombre: 'Eco Mama',
          telefono: '455 331',
        },
        {
          nombre: 'Eco Mama (Alternativo)',
          telefono: '455 332',
        },
        {
          nombre: 'Rayos X (sala informes)',
          telefono: '376 222',
        },
        {
          nombre: 'Rayos X (sala informes alternativo)',
          telefono: '376 223',
        },
        {
          nombre: 'Rayos X (sala exploraciones)',
          telefono: '455 071',
        },
        {
          nombre: 'TAC-1',
          telefono: '455 164',
        },
        {
          nombre: 'TAC-2',
          telefono: '455 171',
        },
        {
          nombre: 'Supervisor/a',
          telefono: '497 764',
        },
      ],
    },
    {
      nombre_departamento: 'REHABILITACIÓN - CONSULTAS',
      telefonos: [
        {
          nombre: 'Citación',
          telefono: '376 131',
        },
        {
          nombre: 'Dr. Cuello',
          telefono: '376 163',
        },
        {
          nombre: 'Dr. Martínez Tello',
          telefono: '376 164',
        },
        {
          nombre: 'Dra. Guerola',
          telefono: '376 162',
        },
        {
          nombre: 'Dra. Rambla',
          telefono: '455 144',
        },
        {
          nombre: 'Dr. Vasquez',
          telefono: '455 117',
        },
        {
          nombre: 'Terapia Ocupacional',
          telefono: '455 288',
        },
      ],
    },
    {
      nombre_departamento: 'REHABILITACIÓN - FISIOTERAPIA',
      telefonos: [
        {
          nombre: 'Algias',
          telefono: '455 170',
        },
        {
          nombre: 'RHB Suelo Pélvico',
          telefono: '455 168',
        },
        {
          nombre: 'Coordinador/a',
          telefono: '455 349',
        },
        {
          nombre: 'Gimnasio',
          telefono: '455 172',
        },
      ],
    },
    {
      nombre_departamento: 'RESIDENCIA S.M. CARDENAL COSTA',
      telefonos: [
        {
          nombre: 'Citación',
          telefono: '376 016',
        },
        {
          nombre: 'Psicólogo (J.López)',
          telefono: '455 034',
        },
        {
          nombre: 'Psicóloga (Pilar Mahiques)',
          telefono: '455 088',
        },
        {
          nombre: 'Psiquiatra (J. Cabo)',
          telefono: '455 342',
        },
        {
          nombre: 'Psiquiatra Nieves (Rodriguez)',
          telefono: '455 038',
        },
        {
          nombre: 'Despacho enfermera (Tania)',
          telefono: '455 039',
        },
        {
          nombre: 'Residente',
          telefono: '455 040',
        },
        {
          nombre: 'Sala reuniones',
          telefono: '376 017',
        },
        {
          nombre: 'Psicóloga (Silvia Edo)',
          telefono: '455 041',
        },
        {
          nombre: 'Despacho enfermera',
          telefono: '455 042',
        },
        {
          nombre: 'Trabajador Social/Super (Begoña Felip)',
          telefono: '376 115',
        },
        {
          nombre: 'UTAI',
          telefono: '376 279',
        },
      ],
    },
    {
      nombre_departamento: 'UNIDAD DE CRÍTICOS',
      telefonos: [
        {
          nombre: 'Control 1',
          telefono: '455 056',
        },
        {
          nombre: 'Control 2',
          telefono: '376 275',
        },
        {
          nombre: 'Administrativo',
          telefono: '455 076',
        },
        {
          nombre: 'Jefe de Servicio',
          telefono: '455 077',
        },
        {
          nombre: 'Supervisor/a',
          telefono: '455 078',
        },
        {
          nombre: 'Médico de guardia',
          telefono: '455 308',
        },
        {
          nombre: 'UCI Intermedia',
          telefono: '455 087',
        },
      ],
    },
    {
      nombre_departamento: 'ONCOLOGÍA RT',
      telefonos: [
        {
          nombre: 'Acelerador Lineal (Auxiliar)',
          telefono: '376 230',
        },
        {
          nombre: 'Consulta enfermera RT',
          telefono: '376 231',
        },
        {
          nombre: 'Acelerador 1',
          telefono: '455 130',
        },
        {
          nombre: 'Acelerador 2',
          telefono: '455 069',
        },
        {
          nombre: 'Acelerador 3',
          telefono: '455 128',
        },
        {
          nombre: 'TAC RT (Planimetría)',
          telefono: '376 229',
        },
        {
          nombre: 'Sala planificación',
          telefono: '455 177',
        },
        {
          nombre: 'Dr. Ferrer (despacho)',
          telefono: '376 187',
        },
        {
          nombre: 'Secretaria Instituto Oncológico',
          telefono: '376 186',
        },
        {
          nombre: 'C-77a (Dr. Ferrer)',
          telefono: '455 074',
        },
        {
          nombre: 'C-78 (Dra Piquer, Dra. Fernández)',
          telefono: '376 156',
        },
        {
          nombre: 'C-79 (Dra. Rodríguez)',
          telefono: '376 158',
        },
        {
          nombre: 'C-80 (Dr. Sánchez Iglesias)',
          telefono: '455 173',
        },
        {
          nombre: 'C-81 (Dra. Morillo, Dr. Muelas)',
          telefono: '376 142',
        },
        {
          nombre: 'C-82 (Dra. Beato, Dra. Francés)',
          telefono: '376 157',
        },
        {
          nombre: 'Busca Radioterapeuta',
          telefono: '497 865',
        },
      ],
    },
    {
      nombre_departamento: 'UNIDAD DE CONDUCTAS ADICTIVAS (UCA)',
      telefonos: [
        {
          nombre: 'UCA (Guardia)',
          telefono: '497 840',
        },
        {
          nombre: 'Médico',
          telefono: '455 180',
        },
        {
          nombre: 'Psicóloga',
          telefono: '455 181',
        },
        {
          nombre: 'Trabajador Social',
          telefono: '455 182',
        },
        {
          nombre: 'Auxiliar',
          telefono: '455 183',
        },
        {
          nombre: 'Sala reuniones (Residente)',
          telefono: '455 184',
        },
        {
          nombre: 'Recepción',
          telefono: '455 329',
        },
        {
          nombre: 'Busca UCA',
          telefono: '497 842',
        },
      ],
    },
    {
      nombre_departamento: 'SERVICIOS GENERALES',
      telefonos: [
        {
          nombre: 'Almacén de fungible (Gorka)',
          telefono: '455 154',
        },
        {
          nombre: 'Almacén de fungible',
          telefono: '455 309',
        },
        {
          nombre: 'Papelería 1',
          telefono: '455 150',
        },
        {
          nombre: 'Papelería 2',
          telefono: '455 304',
        },
        {
          nombre: 'Recepción Paquetería',
          telefono: '455 153',
        },
        {
          nombre: 'Ropero',
          telefono: '455 030',
        },
        {
          nombre: 'Servicios Generales',
          telefono: '376 098',
        },
        {
          nombre: 'Jefa Personal Subalterno',
          telefono: '455 157',
        },
      ],
    },
    {
      nombre_departamento: 'ODONTOLOGÍA - CONSULTAS',
      telefonos: [
        {
          nombre: 'Evaristo/Esmeralda',
          telefono: '497 926',
        },
        {
          nombre: 'Citas',
          telefono: '376 180',
        },
      ],
    },
    {
      nombre_departamento: 'SINDICATOS',
      telefonos: [
        {
          nombre: 'CC.OO',
          telefono: '376 112',
        },
        {
          nombre: 'CSIF',
          telefono: '376 114',
        },
        {
          nombre: 'SATSE',
          telefono: '376 176',
        },
        {
          nombre: 'UGT',
          telefono: '376 118',
        },
      ],
    },
    {
      nombre_departamento: 'UNIDAD DE HOSPITALIZACIÓN DOMICILIARIA',
      telefonos: [
        {
          nombre: 'Administrativa (Susana)',
          telefono: '376 218',
        },
        {
          nombre: 'Interno',
          telefono: '455 269',
        },
        {
          nombre: 'Almacén / Aux. Enfermería',
          telefono: '455 286',
        },
        {
          nombre: 'Busca Guardia',
          telefono: '441 199',
        },
        {
          nombre: 'Supervisor/a',
          telefono: '455 287',
        },
        {
          nombre: 'Jefe Unidad (Dr. Dolz)',
          telefono: '455 284',
        },
        {
          nombre: 'Dra. Torres',
          telefono: '497 721',
        },
        {
          nombre: 'Dra. Herrero',
          telefono: '497 730',
        },
        {
          nombre: 'Dra. Rodríguez',
          telefono: '497 731',
        },
        {
          nombre: 'Enfermera guardia',
          telefono: '628 706 047',
        },
      ],
    },
    {
      nombre_departamento: 'SEGURIDAD',
      telefonos: [
        {
          nombre: 'Seguridad Central',
          telefono: '497 794',
        },
        {
          nombre: 'Seguridad',
          telefono: '455 305',
        },
      ],
    },
    {
      nombre_departamento: 'RESONANCIA MAGNÉTICA',
      telefonos: [
        {
          nombre: 'Citación',
          telefono: '376 205',
        },
        {
          nombre: 'Técnicos',
          telefono: '455 276',
        },
        {
          nombre: 'Dra. Meneu',
          telefono: '455 278',
        },
      ],
    },
    {
      nombre_departamento: 'QUIRÓFANO',
      telefonos: [
        {
          nombre: 'Amparo Monzonis',
          telefono: '455 053',
        },
        {
          nombre: 'Administrativa',
          telefono: '455 050',
        },
        {
          nombre: 'Preanestesia',
          telefono: '455 052',
        },
        {
          nombre: 'Anestesia',
          telefono: '455 054',
        },
        {
          nombre: 'Administrativo/Pedidos',
          telefono: '455 055',
        },
        {
          nombre: 'Almacén',
          telefono: '376 143',
        },
        {
          nombre: 'URPA',
          telefono: '376 262',
        },
        {
          nombre: 'UCSI',
          telefono: '376 263',
        },
        {
          nombre: 'Preanestesia/despertar',
          telefono: '497 924',
        },
      ],
    },
    {
      nombre_departamento: 'UROLOGÍA',
      telefonos: [
        {
          nombre: 'Litotricia',
          telefono: '376 170',
        },
        {
          nombre: 'Despacho Urología',
          telefono: '376 171',
        },
        {
          nombre: 'Suelo Pélvico 1 (Dra. Llorca)',
          telefono: '455 027',
        },
        {
          nombre: 'Suelo Pélvico 2 (Enfermera)',
          telefono: '455 017',
        },
        {
          nombre: 'Uro Consulta 1',
          telefono: '376 182',
        },
        {
          nombre: 'Uro Consulta 2',
          telefono: '376 183',
        },
      ],
    },
    {
      nombre_departamento: 'SERVICIOS JURÍDICOS',
      telefonos: [
        {
          nombre: 'Asesoría Jurídica (Elena)',
          telefono: '376 082',
        },
        {
          nombre: 'Rosa',
          telefono: '376 241',
        },
        {
          nombre: 'Ester',
          telefono: '376 242',
        },
      ],
    },
  ],
};
