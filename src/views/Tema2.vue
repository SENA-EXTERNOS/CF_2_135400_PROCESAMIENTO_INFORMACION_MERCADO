<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Alistar documentos

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')

      .col-lg-9
        p Los documentos funcionan como prueba sobre un determinado acontecimiento o acción, en estos se debe incluir elementos visuales o audiovisuales como lo son textos, fotografías, gráficos, citaciones, grabaciones, vídeos, entre otros. Es viable implementar tanto documentos físicos como digitales, estos últimos cada vez más usados por las organizaciones ya que permiten utilizar el menor número de recursos, disminuyendo el tiempo de procesamiento de solicitudes y comunicaciones. 

    Separador

    #t_2_1
    
    .titulo-segundo.color-secundario.mb-5
      h2 2.1 Tipos de documentos   
    p En el siguiente vídeo podrá ver los tipos de documentos existentes que le permitirán la recolección de datos:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video  

    .row.mt-3
      p Se debe tener en cuenta que hay una variedad de documentos que son implementados por las organizaciones de acuerdo con los diferentes factores y objetivos de estos, también se debe tener en cuenta que estos son vitales para generar un soporte sobre lo establecido por la organización, por esta misma razón se buscan clasificar de diferentes formas, a saber:

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-1
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
      .col-lg-8
        h3 De acuerdo con su uso
        ul.lista-ul--color.mt-3
          li 
            i.fas.fa-angle-right
            p.mb-0 #[b Privados:] como su nombre lo indica este tipo de documento es exclusivamente desarrollado por instituciones privadas, certificados por los mismos, un ejemplo de esto es un contrato de trabajo dentro de una organización.

          li 
            i.fas.fa-angle-right
            p.mb-0 #[b Públicos:] este tipo de documento suele tener mayor relevancia, ya que está realizado por diferentes entes estatales, como lo son un pasaporte, licencia de conducción o título de propiedad. 

      .col-lg-1

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-1
      .col-lg-10
        h3 De acuerdo con el formato
        ul.lista-ul--color.mt-3
          li 
            i.fas.fa-angle-right
            p.mb-0 #[b Iconográficos:] este tipo de documento se caracteriza por contener en su gran mayoría elementos visuales, como lo son fotos o dibujos, también pueden incluir pequeñas fracciones de texto, que expliquen las imágenes representadas dentro del documento.
          li 
            i.fas.fa-angle-right
            p.mb-0 #[b Textuales:]en su gran mayoría incluyen textos, como las monografías, ensayos, entre otros. Los documentos textuales suelen tener un carácter bastante formal, por lo que son muy implementados dentro de las organizaciones. 
          li 
            i.fas.fa-angle-right
            p.mb-0 #[b Virtuales o digitales:] los documentos virtuales son todos aquellos que se encuentran en una base de datos almacenados en la web, esto puede incluir, textos, imagines, gráficos, vídeos, grabaciones de audio, entre otras. 
          li 
            i.fas.fa-angle-right
            p.mb-0 #[b Audiovisuales:] este tipo de documentos como su nombre lo indican tratan sobre elementos visuales y sonoros, por lo que en esta categoría se encuentran documentales y vídeos. 
          li 
            i.fas.fa-angle-right
            p.mb-0 #[b Sonoros:] documentos de audio o sonoros, como podcast y discos.

      .col-lg-1
      
    p La selección del documento ideal para transmitir y sustentar el proceso investigativo y administrativo de cualquier empresa se encuentra ligado con el tipo de comunicación al que se quiere llegar, de igual forma es importante tener en cuenta los requerimientos que exige la empresa, ya que algunas incorporan reglas en el desarrollo de sus documentos como lo son el uso de normas APA, la adición del logotipo de la organización, entre otros.
    Separador

    #t_2_2
    
    .titulo-segundo.color-secundario.mb-5
      h2 2.2 Instrumentos de recolección

    .row
      p Los instrumentos de recolección de datos son los recursos a los que puede acudir un investigador para obtener un tipo de información específica, existe un numero amplio de instrumentos de recolección, algunos de estos son:
        
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Entrevistas" :icono="require('@/assets/curso/temas/tema2/img3.png')")
        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-9.mb-4.mb-md-0
            p Intercambio de información entre dos o más personas, con el fin de conocer datos relevantes sobre un tema específico. Estas son muy utilizadas en estudios pequeños, pueden realizarse de manera presencial, llamadas telefónicas o internet.
          .col-md-3.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img8.png" alt="Adornos flotantes")

      .py-4.py-md-5(titulo="Cuestionarios" :icono="require('@/assets/curso/temas/tema2/img4.png')")
        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-9.mb-4.mb-md-0
            p Este tipo de instrumento permite recolectar respuestas cuantitativas y se utilizan para generalizar resultados específicos. Los cuestionarios facilitan resultados rápidos, además permiten ser realizados en masa, de forma presencial o virtual.
          .col-md-3.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img12.png" alt="Adornos flotantes")

      .py-4.py-md-5(titulo="Observación" :icono="require('@/assets/curso/temas/tema2/img5.png')")
        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-9.mb-4.mb-md-0
            p Es un proceso en el cual el investigador establece un espacio ya sea controlado o no, donde puede conocer y establecer las posibles variaciones que identifican la relación de las acciones del grupo de personas observadas.
          .col-md-3.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img13.png" alt="Adornos flotantes")

      .py-4.py-md-5(titulo="Grupo Focal – <em>Focus Group</em>" :icono="require('@/assets/curso/temas/tema2/img6.png')")
        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-9.mb-4.mb-md-0
            p Funciona estableciendo un grupo de personas no mayor a 10, teniendo una duración de media hora a una hora y media, buscando extraer información cualitativa relevante sobre la investigación a realizar.
          .col-md-3.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img14.png" alt="Adornos flotantes")

      .py-4.py-md-5(titulo="Comunidades en línea" :icono="require('@/assets/curso/temas/tema2/img7.png')")
        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-9.mb-4.mb-md-0
            p Son uno de los instrumentos más recientes para la recolección de información, se compone de un grupo estratégico con características parecidas. Este tipo de herramienta posibilita la comunicación con el grupo de estudio, además no requieren de una inversión grande, clasificando las respuestas de una forma rápida y eficaz, gracias a las herramientas tecnológicas.
          .col-md-3.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img15.png" alt="Adornos flotantes")
      

    Separador

    #t_2_3
    
    .titulo-segundo.color-secundario.mb-5
      h2 2.3 Perfil del encuestado
    
    .row
      p Es necesario establecer un adecuado perfil del encuestado a quien se le realicen las actividades investigativas, evitando posibles fallas en las respuestas, y generando gastos innecesarios de recursos de las empresas. Las características que se deben cumplir para fijar o establecer un adecuado perfil, se puede realizar mediante algunos pasos, a saber:

    .row.justify-content-center
      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img9.png", alt="alt").m-auto

      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Establecer el objetivo de la investigación")
            .col-12
              p Con esto se tendrá en cuenta que el perfil del encuestado será dirigido a partir de este.

          .row(titulo="Fijar el equipo de encuestadores")
            .col-12
              p Es primordial establecer el grupo de personas que harán parte de la investigación, para esto se deben tener características específicas como lo son facilidad de comunicación, empatía, conocimiento en el tema, entre otros. 

          .row(titulo="Desarrollar la herramienta de investigación ")
            .col-12
              p Establecer la herramienta investigativa e incluir las preguntas o estrategias de extracción de la información. 

          .row(titulo="Seleccionar el público a encuestar")
            .col-12
              p Validar que las personas seleccionadas para este fin se encuentren dentro del nicho de mercado establecido por la empresa, no obstante, de esta muestra se podrán extraer personas (ya sea de forma estratégica o al azar) para desarrollar el proceso investigativo. 

          .row(titulo="Validar las personas a encuestar")
            .col-12
              p Elaborar un filtro sobre los candidatos a encuestar, por lo que se plantea desarrollar nuevamente un proceso de selección del perfil del encuestado. 

          .row(titulo="Desarrollar el proceso de investigación")
            .col-12
              p Durante el desarrollo del proceso, los encuestadores deberán estar al tanto de las respuestas arrojadas por el grupo encuestado, dirigiendo y estableciendo las interrogantes que se desean resolver.

          .row(titulo="Ultimo filtro")
            .col-12
              p Ya que se pueden presentar errores al seleccionar el grupo encuestado, que únicamente son evidenciados durante el paso anterior, se podrán descartar las personas que no cumplan con el perfil encuestado. 
    
      .row
        p #[b Es importante establecer el perfil del encuestado, no obstante, se pueden presentar errores dentro del mismo, por lo que se recomienda establecer grupos amplios de investigación, que permitan conocer las mejores respuestas o con mayor relevancia para el estudio.]  

    Separador

    #t_2_4
    
    .titulo-segundo.color-secundario.mb-5
      h2 2.4 Capacitación del encuestador

    .row
      p El encuestador requiere de elementos clave que lo vuelven idóneo para el desarrollo investigativo. Este tiene la función de guiar y establecer las mejores rutas para llevar a cabo el estudio, ya que la capacitación de los encuestadores varía de acuerdo con el tipo de organización y objetivo de la investigación, algunas de las características primordiales que comparten los procesos de capacitación son los siguientes: 

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Primer paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small Seleccionar las personas con capacidades de comunicación, empatía y respeto:

              ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Permite que el encuestado conozca la importancia del estudio.

                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Impulsa a la necesidad de contribuir con la investigación.

                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Transmite tranquilidad.

          .row(numero="2" titulo="Segundo paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small Conoce e identifica el material para la investigación:

              ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Conoce y relaciona las definiciones y objetivos de la investigación.

                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Identifica los elementos de recolección de información (conoce el   instrumento de recolección de información).

          .row(numero="3" titulo="Tercer paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small Relaciona adecuadamente la información obtenida:

              ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Organiza la información obtenida de manera objetiva.

                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Mantiene los elementos para el desarrollo de encuestas de manera ordenada.

          .row(numero="4" titulo="Cuarto paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small Cumple el objetivo de confiabilidad:

              ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-angle-right
                    p.mb-0.text-small Esto es vital tanto para la organización como para los encuestados, ya que se pueden presentar elementos personales u organizacionales que son estrictamente confidenciales.

            
                  
    Separador

    #t_2_5
    
    .titulo-segundo.color-secundario.mb-5
      h2 2.5 Planificación de la recolección de información

    .row
      p Una buena planificación en la recolección de la información facilita el análisis de la información recolectada, es por eso por lo que las empresas u organizaciones desarrollan planes previos a la recolección de la información, entre los que se deben tener en cuenta:


    .bg--img_03
      .row.justify-content-around.align-items-center.mt-5.mb-5
        .col-lg-7
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Establecer el objetivo de estudio")
              .col-12
                p.mb-0 Es primordial conocer el verdadero objetivo de la investigación, ya que se debe focalizar los recursos a invertir.

            .row(titulo="Conocer y obtener las autorizaciones necesarias")
              .col-12
                p.mb-0 Algunas investigaciones requieren de permisos específicos por parte de la misma empresa u otras entidades que se involucren dentro del estudio. 

            .row(titulo="Fijar un tiempo")
              .col-12
                p.mb-0 De esto dependerán la cantidad de recursos materiales.

            .row(titulo="Definir los recursos")
              .col-12
                p.mb-0 Se deben especificar el monto total de los recursos a implementar.

            .row(titulo="Validar el proceso a llevar a cabo")
              .col-12
                p.mb-0 Identificar el instrumento de investigación a realizar y las preguntas a solventar con el estudio.

            .row(titulo="Capacitar al personal")
              .col-12
                p.mb-0 Para esto se podrá contar con personal de la empresa o seleccionar personas externas. 

            .row(titulo="Supervisar y coordinar el proceso de recolección de la información")
              .col-12
                p.mb-0 Validar que el proceso investigativo se esté llevando a cabo de acuerdo con lo planteado inicialmente, asignando personas específicas para dicha actividad. 

            .row(titulo="Organizar y clasificar la información")
              .col-12
                p.mb-0 De acuerdo con los estándares de la empresa y el objetivo de estudio. 

            .row(titulo="Revisar y especificar posibles errores dentro del proceso de recolección")
              .col-12
                p.mb-0 Excluir respuestas erróneas y procesos no adecuados de la recolección de información, entre otros posibles factores que afecten la investigación.

            .row(titulo="Entrega de la información")
              .col-12
                p.mb-0 Entregar la información suministrada para su posterior análisis. 
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img11.png", alt="alt").img400.m-auto
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
