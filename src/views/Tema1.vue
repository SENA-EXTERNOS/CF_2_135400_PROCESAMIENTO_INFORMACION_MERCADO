<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño de instrumentos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diseño de los instrumentos de investigación de datos define los objetivos de toda investigación y permite establecer el tipo de resultados que se quieren obtener ya sean de carácter cuantitativo o cualitativo, este debe abarcar la mayor cantidad de interrogantes a resolver, por lo que deberá utilizar el mejor instrumento de recolección de datos.
      
    p.mb-5 El objetivo del desarrollo de un buen diseño de instrumentos se enfoca en los resultados que se desean obtener, para establecer las conclusiones que beneficien a las empresas. El proceso es:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img2.png')

    h3 Componentes del instrumento de recolección
    p El desarrollo de instrumentos de recolección de información se rige por diferentes factores, pues se pretende resultados objetivos y claros:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-lg
             
              p Seleccionar y enfocar el instrumento de recolección en las respuestas que se desean obtener, teniendo en cuenta que se debe especificar el tema a tratar dentro de la misma.

            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img3.png', alt='').img125

          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img4.png', alt='').img125
            .col-lg
              p No limitarse ni excederse en el número de preguntas, el objetivo del instrumento de recolección es extraer la mayor cantidad de respuestas por parte del usuario, es necesario que estas no excedan el número de preguntas, debido a que se puede agotar al encuestado y generar resultados erróneos.
          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-lg
              p Realizar instrumentos de recolección cortos y simples, esto puede ir un poco en contra del punto anterior, sin embargo, se enfoca en el desarrollo de preguntas de fácil deducción, donde el encuestado conteste de forma clara. 

            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img5.png', alt='').img125

          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img6.png', alt='').img125
            .col-lg
              p Es importante tener en cuenta que cada pregunta debe estar enfocada, es decir, tratar únicamente un tema a la vez, ya que se puede caer en el vicio de pretender abordar múltiples resultados de una sola pregunta, confundiendo al encuestado y no obteniendo buenos resultados. 

          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-lg
              p No es necesario complicarse utilizando tecnicismo, ya que se debe manejar un lenguaje claro y sencillo.

            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img7.png', alt='').img125

          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img8.png', alt='').img125
            .col-lg
              p Se pueden realizar preguntas de diferentes tipos, por lo que no es necesario limitarse a preguntas cerradas, no obstante, se debe tener cuidado en esto, ya que se requieren resultados claros.

          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-lg
              p Diseñar un instrumento de recolección coherente y agradable a la vista, fijando un orden específico para las preguntas a realizar, intentando tener la mayor coherencia posible, esto se puede realizar por medio de bloques de preguntas. 

            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img9.png', alt='').img125

          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img10.png', alt='').img125
            .col-lg
              p Desarrollar una revisión, donde un miembro del equipo de trabajo realice un breve simulacro sobre el instrumento de recolección, encontrando posibles fallas o aciertos en cuanto a la elaboración de este.

    h3 Tipos de investigación
    p La investigación es fundamental para el desarrollo de cualquier empresa, por lo que los objetivos de esta puede variar según los requerimientos de cada una de las instituciones, incluyendo la población que se desea estudiar, el presupuesto a implementar y el tipo de investigación que se aplicará. A continuación, se presentan algunos de los tipos de investigación existentes: 

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img11.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Investigación primaria o de campo")
              .col-12
                p.mb-0 Este tipo de investigación se enfoca en la obtención de información de fuentes directas, como encuestar a un cliente sobre su opinión en el desarrollo de un servicio o producto, actividad que solo realiza el personal de la empresa, con el fin de conocer de primera mano las actitudes y respuestas del cliente. Algunos de los beneficios que ofrece este tipo de investigación son:
            
                ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-angle-right
                    | Resultados realistas y recientes.

                  li 
                    i.fas.fa-angle-right
                    | Conocer el proceso que realizan otras empresas.


                  li 
                    i.fas.fa-angle-right
                    | Personalización de los datos que se desean recopilar.

                  li 
                    i.fas.fa-angle-right
                    | Resultados confiables.

                  li 
                    i.fas.fa-angle-right
                    | Libertad en establecer si los resultados obtenidos serán de uso privado o público.

                p.mt-3 A pesar de que se tienen grandes ventajas al implementar este tipo de investigación es necesario mencionar que este puede ocupar mayor uso de recursos como tiempo y dinero.

            .row(titulo="Investigación secundaria")
              .col-12
                p.mb-0 Para el desarrollo de este tipo de investigación es necesario identificar y buscar las bases de información representativas para las empresas, las cuales son mayoritariamente de acceso gratuito, desarrolladas por los diferentes entes estatales o universidades; sin embargo, existen otros tipos de fuentes de información que requieren de un aporte monetario, dichos informes suelen enfocarse en un sector específico. Uno de los beneficios de este tipo de investigación radica en que no es necesario indagar uno a uno los entes para la extracción de información, sino que con solo establecer fuentes de datos podrá conocer respuestas previas realizadas por otras personas o entidades. 

            
            .row(titulo="Investigación cuantitativa")
              .col-12
                p.mb-0 Como su nombre lo indica este tipo de investigación busca recolectar datos cuantificables, resultados numéricos sobre los diferentes cuestionamientos que se establezcan en la investigación, un ejemplo de esto es conocer el número de mujeres entre los 20 a 25 años que prefieren adquirir productos libres de maltrato animal en la ciudad de Cartagena. De acuerdo con lo anterior es necesario establecer que este tipo de investigación debe ser muy precisa y certera en cuanto a los resultados que arroje, ya que en su mayoría se hará uso de preguntas cerradas, facilitando la recolección de datos.



    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Investigación cualitativa")
              .col-12
                p.mb-0 Esta busca entender el comportamiento de determinados grupos, por lo que en su mayoría se desarrolla a un grupo pequeño de personas. La investigación cualitativa tiene mayor flexibilidad, ya que los resultados obtenidos deberán ser analizados de forma subjetiva. Para el desarrollo de esta se puede hacer uso de varias estrategias como:

                ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Entrevistas individuales 
                      |<em> on-line / off-line.</em>

                  li 
                    i.fas.fa-angle-right
                    | Entrevistas grupales.

                  li 
                    i.fas.fa-angle-right
                    | Análisis de respuestas en redes sociales.

               
            .row(titulo="Investigación experimental")
              .col-12
                p.mb-0 También conocida como método científico experimental, este busca resultados únicos obtenidos directamente de procesos experimentales como las pruebas de laboratorio, las cuales son realizadas en entornos científicos. Es importante destacar que este tipo de investigación se utiliza cuando se desea comprobar información relevante o cuando no se poseen bases sobre la misma. Dentro de las principales ventajas que presenta este tipo de investigación se encuentran: 

                ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-angle-right
                    | El control sobre los diferentes elementos que involucren el estudio.

                  li 
                    i.fas.fa-angle-right
                    | Desarrollar varias veces el proceso investigativo.

                  li 
                    i.fas.fa-angle-right
                    | Resultados específicos.

                p.mt-3 Por otro lado, las desventajas que presenta este tipo de investigación incluyen que se realizan en estados controlado, es decir, lugares donde las variables son artificiales, además de ser un proceso largo y costoso.

            .row(titulo="Investigación motivacional")
              .col-12
                p.mb-0 Esta se caracteriza por buscar el motivo del porqué las personas se comportan de determinada forma en sus procesos de compra, intentando resolver la incógnita sobre qué motiva a un consumidor a adquirir determinado producto o servicio, y a establecer por qué prefieren una marca sobre otras. Esto permite a las empresas identificar las principales variables para realizar ajustes frente a sus servicios o productos. 

            .row(titulo="Investigación descriptiva")
              .col-12
                p.mb-0 La investigación descriptiva se enfoca en describir las situaciones en las que los clientes o consumidores realizan determinada actividad dentro del proceso de mercado, este tipo de investigación solo busca delinear las características de una población específica, midiendo tendencias y comportamientos de estos. Cabe resaltar que es considerada el primer paso para el desarrollo de otras investigaciones, estableciendo las posibles preguntas a realizar.

        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img12.png", alt="alt").img400.m-auto


    h3 Tipos de preguntas

    p Para el desarrollo de los diferentes diseños de instrumentos de investigación, es necesario establecer las preguntas más claras y precisas posibles. Para empezar una pregunta es una expresión interrogativa, que busca conocer o extraer algún tipo de información específica. De acuerdo con lo anterior existen diferentes tipos de preguntas entre los que se encuentran:

    .tarjeta.tarjeta--azul.p-4.backgrouun-slider
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0

            h3 Preguntas cerradas

            p Por lo general obtienen respuestas cortas o sencillas, también se pueden limitar a un número específico de resultados previamente establecidas por el encuestador, además sirven para desarrollar análisis simples.

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0

            h3 Preguntas abiertas

            p Permiten conocer de una forma más personal las respuestas de los encuestados, donde las personas pueden generar su propio punto de vista respecto al tema que se les esté indagando. También permite conocer a fondo otros factores que involucran las respuestas obtenidas, como las preferencias de un color sobre otro, lo cual puede responder a factores como que le recuerda su infancia o que lo relaciona con algo de su vida cotidiana.

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0

            h3 Preguntas directas

            p Como su nombre lo indica, este tipo de preguntas se enfocan directamente en su objetivo, es decir, no hacen rodeos ni realizan explicaciones previas. Las preguntas directas son muy útiles para conocer datos específicos se utilizan para establecer conversaciones simples y crear la introducción a cualquier tipo de estudio investigativo.

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img16.png', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0

            h3 Preguntas indirectas

            p Suele ser implementada para crear un sentimiento de confianza y tranquilidad en las personas encuestadas, y de esta forma extraer más información de la que se lograría con otro tipo de pregunta. 

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0

            h3 Preguntas retóricas

            p Permiten generar un respiro en el encuestado y el encuestador, ya que son preguntas que se responden por sí solas y en muchos casos simplemente se usan como forma de pausa activa. No obstante, estas también se pueden emplear para reafirmar algo ya establecido.

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0

            h3 Preguntas reflexivas

            p En esta se indaga a fondo las respuestas de los encuestados, extrayendo las intenciones o pensamientos reales de las personas, esto con el fin de conocer a profundidad todos los factores que se puedan presentar dentro una acción.

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0

            h3 Preguntas capciosas 

            p A pesar de no ser tan usadas en el ámbito de mercado, este tipo de preguntas busca confundir al encuestado, por lo que es muy utilizado en el ámbito académico, permitiendo que el estudiante indague y replantee su posición de la mejor forma posible.
       

    .row.justify-content-center.my-5
      
      .col-lg-11.sm-2         
          
        .bloque-texto-g.color-secundario.p-4.mb-4
          .row.justify-content-center            
            .col-lg-7
              p #[b La selección del tipo de preguntas que se van a realizar dentro de cualquier estudio investigativo dependerá únicamente del propósito y objetivo de este, de igual forma, es importante mencionar que en la mayoría de los casos será necesario establecer más de un tipo de pregunta para el desarrollo de un buen proceso investigativo. ]
            .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img20.png').imgdimensioncaj2
    
    h3 Muestra de recolección

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')

      .col-lg-9
        p Para el desarrollo de cualquier proceso investigativo es necesario establecer un límite de personas a investigar, esto debido a que, si se plantea estudiar a toda una población se podría generar un resultado tardío y con variaciones; además se debe tener en cuenta que no todas las personas podrán ser parte de un mismo estudio, ya que las características de las personas varían de acuerdo con sus necesidades. A lo anterior se le deben excluir investigaciones poblacionales que realizan las entidades estatales, ya que, en estos casos se plantea buscar al mayor número de personas pertenecientes a un mismo territorio.

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-2
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema1/img22.png', alt='Texto que describa la imagen')
      .col-lg-2

    .row.justify-content-center.mt-5
      .col-lg-11.sm-2         
        .bloque-texto-g.color-secundario.p-4.mb-4
          .row.justify-content-center      
            .col-lg-3      
            .col-lg-7
              p Para el desarrollo de un proceso investigativo por parte de una entidad se debe tener en cuenta que no se deberá realizar la investigación a toda la población (universo), tampoco se podrá realizar este estudio a toda la unidad de análisis, ya que también podría ser elevada y poco objetiva, por lo que se realiza únicamente a una muestra de personas pertenecientes a unidad de análisis. 
        figure
          img(src='@/assets/curso/temas/tema1/img23.png').imgdimensioncaj3

    .row
      p.text-center.mt-3 Existen dos formas de seleccionar una muestra específica, entre las que se encuentran los tipos de muestreo:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img24.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Aleatorio (Probabilístico)
            ul.lista-ul--color.mt-3
              li 
                i.fas.fa-angle-right
                | Aleatorio o al azar simple


              li 
                i.fas.fa-angle-right
                | Aleatorio o al azar sistemático

              li 
                i.fas.fa-angle-right
                | Estratificado

              li 
                i.fas.fa-angle-right
                | Conglomerado



      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img25.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 No aleatorio (No Probabilístico)
            ul.lista-ul--color.mt-3
              li 
                i.fas.fa-angle-right
                | Conveniencia


              li 
                i.fas.fa-angle-right
                | Voluntarios

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
