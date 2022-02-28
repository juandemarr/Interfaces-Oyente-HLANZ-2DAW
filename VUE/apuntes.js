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
            type:, //validaciones opcionales?
            required:
        }
    },
    template: `  //esto es equivalente al return de react. Solo puede disponer de un elemento padre html
        <div>  
            
        </div>
    `,
    data(){ //ya no es un objeto como en la instancia vue, sino una funcion que devuelve un objeto data, para que cada 
            //componente tenga sus propios datos, sino estarian compartidos
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
    data:{
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
    this.$emit('nombreEvento', datoaEmitir) //esto emite un evento que se recibe en el padre escribiendo esto:

    <product :premium="premium" @add-to-cart="updateCart"></product>  //al escuchar al evento add-to-cart, llama
    al metodo updateCart definido aqui en el padre

Se puede crear un array con todos los id de los prodctos que se van emitiendo, y luego .length indica el numero de 
elementos que hay en el carrito.


--- FORMS

Vue.component('product-review',{
    template:`
        <input>
    `,
    data() {
      return {
        name: null,
        review: null,
        rating: null,
    --- errors: [] //Para la validacion personalizada
      }
    },
    methods:{
        onSubmit() { //Esto crea un objeto con los datos introducidos, y luego resetea los campos.
        --- if(this.name && this.review && this.rating){ //Para la validacion personalizada
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                this.$emit('review-submitted', productReview) //como este componente está dentro del componente product,
                                //pasamos el objeto al padre.
                this.name = null
                this.review = null
                this.rating = null
        --- } else {
                if(!this.name) this.errors.push("Name required.")
                if(!this.review) this.errors.push("Review required.")
                if(!this.rating) this.errors.push("Rating required.")
            }
        }
    }
})

v-model, hace un binding desde el template al data del componente, aparte del v-bind que lo hacia desde el data al 
template. Es un binding en doble sentido, data y template. Cuando algo cambie se actualiza en el otro sentido.

--- <p v-if="errors.length">  //Para la validacion
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>

<form class="review-form" @submit.prevent="onSubmit">
    <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
    </p>
      
    <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
    </p>
      
    <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
    </p>
          
    <p>
        <input type="submit" value="Submit">  
    </p>    
    
</form>

**El v.model.number es un modificador que convierte lo que recibe a integer. Si se queda el campo vacio, lo convierte a string
y da fallo. Usar Number(this.myNumber)

**submit.prevent es un modificador de eventos. Hay mas en: https://v2.vuejs.org/v2/guide/events.html

**En el componete product que es el padre, cuando llamamos al hijo:
<product-review @review-submitted="addReview" ></product-review>

//Esto para mostrar las reviews
    <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.review }}</p>
          </li>
        </ul>
       </div>

en methods:{
    addReview(productReview) {
      this.reviews.push(productReview)
    }
}
y en data(){
    return{
        reviews: []
    }
}

--- PODEMOS HACER VALIDACIONES PERSONALIZADAS.
En el metodo onSubmit, comprueba si le llegan datos del form, sino mete a un array errors los mensajes de error 
de cada campo.
Ese array se muestra encima del form, por ejemplo, en forma lista.



--- PESTAÑAS

Si pinchas en una pestaña, se muestran las reviews, si pinchas en la pestaña añadir review, se muestra solo el form

Creamos un componete pestañas:
Vue.component('product-tabs', {
    template: `
        <div>
            <span class="tab" 
                v-for="(tab, index) in tabs" :key="index"
                @click="selectedTab = tab" //este ultimo igual le asigna al dato selectedTab el valor tab clicado del bucle
            >{{ tab }}</span>
        </div>
    `,
    data() {
        return {
          tabs: ['Reviews', 'Make a Review'],
          selectedTab: 'Reviews'  // set from @click      
        }
    }
})








*/