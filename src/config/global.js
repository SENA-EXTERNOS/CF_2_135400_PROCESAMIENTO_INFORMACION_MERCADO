export default {
  global: {
    componenteFormativo: 'Instrumentos de recolección de datos',
    descripcionCurso:
      'Los instrumentos de recolección de datos posibilitan el desarrollo investigativo de las organizaciones y el cumplimiento de sus objetivos.<br>En este componente formativo se presentan los elementos para diseñar y alistar instrumentos de recolección de información, así como la puesta en práctica de estos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Titulo de primer nivel',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes del instrumento de recolección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de investigación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de preguntas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Muestra de recolección',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Alistar documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de documentos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Instrumentos de recolección',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Perfil del encuestado',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Capacitación del encuestador',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Planificación de la recolección de información',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Elementos de una investigación de mercado',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020). <em>Elementos de una investigación de mercado</em>. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/pR33mqevijU',
    },
    {
      tema: 'Clasificación de tipos de investigación según objeto de estudio',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <em>Clasificación de tipos de investigación según objeto de estudio</em>. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/GCZ503I6r0k',
    },
    {
      tema: 'Fuentes y técnicas de recolección de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <em>Fuentes y técnicas de recolección de la información</em>. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/xhTb3dSFR2M',
    },
    {
      tema: 'Documentos digitales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <em>Documentos digitales</em>. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/4flFQ_uh-94',
    },
    {
      tema: 'Organización de los datos recopilados',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <em>Organización de los datos recopilados</em>. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/vvjV66aA93Y',
    },
  ],
  glosario: [
    {
      termino: 'Comportamiento',
      significado:
        'Es la conducta de una persona o ser vivo, de acuerdo con una situación o entorno específico.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Intercambio o transmisión de información, que se genera entre dos o más personas o seres vivos.',
    },
    {
      termino: 'Datos',
      significado:
        'Estos son considerados la información específica y relevante (cualitativa o cuantitativa) arrojada por un proceso investigativo, para su posterior análisis.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Es la meta fijada por el que se desarrollan diferentes acciones específicas, para el cumplimiento de un fin.',
    },
    {
      termino: 'Obtención',
      significado:
        'La extracción de información de un hecho, acción, elemento, entre otros, para un fin específico.',
    },
    {
      termino: 'Recolección',
      significado:
        'Reunir o agrupar información relevante sobre un tema específico, según el objetivo de este. ',
    },
    {
      termino: 'Resultados',
      significado:
        'Sinónimo de consecuencia, el cual se refiere al conjunto de elementos fruto de diferentes acciones.',
    },
    {
      termino: 'Tecnicismos',
      significado:
        'Palabras implementadas en una jerga específica, la cual solo comprenden las personas pertenecientes a grupo específico, con conocimientos similares o compartidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ebook. Sanabria Araya, F. (2018).<em> Investigación de mercados: un enfoque práctico y descriptivo</em>. Ecoe Ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7409',
    },
    {
      referencia:
        'Ebook. Hoyer, W. D., Pieters, R., Maclnnis, D. J. (2018). <em>Comportamiento del consumidor</em>. Cengage Learning.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7493',
    },
    {
      referencia:
        'Ebook. Kerin, R. A., Hartley, S. W. (2019). <em>Marketing</em>. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9915',
    },
    {
      referencia:
        'Ebook. Grasso, L. (2006). Encuestas: elementos para su diseño y Análisis.  Encuentro Grupo Editor.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=2718',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
