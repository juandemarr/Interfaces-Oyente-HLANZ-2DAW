/*Vue 2: https://v2.vuejs.org/v2/guide/

Framework progresivo, desde lo mas sencillo hasta una app completa
para cargarlo desde el cdn
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

Se crea todo en js, se une al html mediante el: y en html llamamos a sus variables

-------VER INDEX DE LA CARPETA INICIO

La instancia vue, esta formada por un objeto de opciones
--el : hace referencia al elemento html al que se va a linkar
-- data : un objeto con las variables reactivas

para incluir variables en html {{variable}}

-- ATRIBUTOS HTML
Para añadir varibales a los valores del atributo de una etiqueta html, se pone delante v-bind:atributo
-- Forma resumida de v-bind => : (dos puntos)

-- CONDICIONAL
-- v-if

en la etiqueta de html ponemos 
<p v-if="variableBooleana">Hello</p>
<p v-else>There</p>
<p v-else-if="">Achuta</p>

estos p tienen que ser hermanos y estar unos seguidos del otro, juntos. Solo mostrara uno de ellos, el resto no se 
renderiza
La condicion del if se puede poner en el html: v-if="inventario > 5"

--- v-show=""

se mostrara el parrafo si se cumple la condicion, sin evaluarse con otros tags y siempre estara en el html, en caso de
no complirse la condicion estara a display:none

Si se va a estar quita y pon elementos, mejor v-show, ya que no quita ni pone elementos en el DOM

-- BUCLES (no es recomendable usar v-if con v-for)
-- v-for

Se pone en la etiqueta que se repetira, ya que son las que generará

declarar una variable como array en js, por convencion se llamara en plural, recorrer en html con v-for
<li v-for="detail in details">{{detail}}</li>
<li v-for="{detail,index} in details">{{detail}}</li>

Para diferenciar a un elemento de una lista de otra, se le asigna una key de vue en el html con:
-- :key=""

-- METODOS DE ARRAY QUE MUTAN, cambian el array original
push()
pop()
shift()
unshift()
splice()
sort()
reverse()


para cambiar un array desde js, usar .set o .splice, no acceder a traves del indice

-- EVENTOS
-- v-on:click="nombreFuncion"
--Forma abreviada @click
en js si se puede usar el this, de hecho al crear una funcion y hacer referencia a una variable, se llama con 
this.variable

-- METODOS
creamos debajo de data otro apartado llamado methods:{
    newFunction(){

    }
}

-- como el 0 es falso, si pongo if(this.cart) cuando valga cero sera false y no seguira decrementando

-- AÑADIR ESTILOS EN HTML CON UNA VARIABLE
:style="{backgroundColor:variant.variantColor}"

--AÑADIR CLASES
:class="{disabledButton : !inStock}"
se puede añadir un array de clases :class="[activeClass, errorClass]"

--- Propiedades calculadas, obtenidas a partie de algun metodo o calculo, y queremos mostrar ese dato
Se realiza al principio cuando se carga la instancia, y cuando se obtiene otro resultado en ese dato
(equivalente al useEffect de react)

    ¿¿¿si no es un dato primitivo, se define como funcion

--- todas las funciones se llaman sin () en html

///////////////////////////////////////////
COMPONENTES

Vue.component('product',{
    props:{
        propiedad:{

        }
    },
    template: `  //esto es equivalente al return de react. Solo puede disponer de un elemento padre html
        <div>  
            
        </div>
    `,
    data(){ //ya no es un objeto como en la instancia vue, sino una funcion, para que cada componente tenga sus 
            //propios datos, sino estarian compartidos
        return {

        }
    },
    methods: {

    },
    computed: {

    }
})

///////////////////////////////////

1--- Para pasar datos desde FUERA en la instancia hacia dentro del componente, props
En el padre se le asigna un valor en data a esa propiedad.
    data(){
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    }
2---En el hijo se define el tipo de dato que va a recibir en esa propiedad, se hace en props:{}
    props: {
        details: {
        type: Array,
        required: true
        }
    }
3---En el html donde se va a usar se nombra con el mismo nombre tanto para la propiedad con v-bind, como para su valor
    <product-details :details="details"></product-details>


/////////////////////////////////////


--- Parapasar datos del componente HACIA FUERA a la instancia prinicpal, emitimos eventos
dentro de la funcion:
    this.$emit('nombreEvento', datoaEmitir)




*/