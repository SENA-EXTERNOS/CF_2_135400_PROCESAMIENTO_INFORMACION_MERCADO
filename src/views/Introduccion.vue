<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/introduccion/img1.png', alt='Texto que describa la imagen')

      .col-lg-9
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará el diseño de instrumentos de recolección de datos y alistamiento de documentos para los mismos.  Las empresas deben encontrar estrategias que les permitan responder a los movimientos del mercado, para ello resulta indispensable desarrollar un proceso investigativo que facilite dichas acciones. Los estudios de mercado son los encargados de llevar a cabo este proceso, haciendo uso de instrumentos de recolección periódica para ser asertivos a los requerimientos del consumidor según las políticas, organizaciones y recursos disponibles.

    .row.justify-content-center.mb-5
      
      .col-lg-11.sm-2           
          
        .bloque-texto-g.color-secundario.p-4.mb-4
          .row.justify-content-center            
            .col-lg-7
              p En este proceso aprenderá sobre el diseño de instrumentos de recolección, los elementos que lo componen, los tipos de investigación y de preguntas y la muestra de recolección, con un enfoque en el alistamiento de documentos, desde donde diferenciar los documentos, los instrumentos de recolección, el perfil del encuestado, la capacitación del encuestador y la planificación de la recolección de la información.
              p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

            .col-lg-3
        figure
          img(src='@/assets/curso/temas/introduccion/img2.png').imgdimensioncaj


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7hqqILJcfjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
