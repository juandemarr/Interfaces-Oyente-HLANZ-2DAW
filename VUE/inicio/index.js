var app = new Vue({
    el : "#app",
    data : {
        message : "Hello there",
        author : "General Kenobi",
        image : "ahsoka.jpg",
        image2: "",
        nameImage : "Ahsoka",
        onSale : true,
        cart : 0,
        stock:7,
        details : ["your","move","you","fool"],
        variants : [
            {
                variantId : 1,
                variantDescription : "Grievous",
                image : "grievous.jpg",
                variantColor : "green",
                variantQuantity:10
            },
            {
                variantId : 2,
                variantDescription : "Kenobi",
                image : "obi-wan.jpg",
                variantColor : "blue",
                variantQuantity:0
            }
        ]
    },
    computed:{
        title(){ //al no ser un dato primitivo, se define como funcion
            return this.nameImage + ' mastery';
        },
        modifyP(){
            if(this.inStock)
                return "SIGUE ESTANDO EN VENTA";
            else
                return "YA NO HAY VENTAS";
        }
    },
    methods : {
        addToCart(){
            if(this.stock){ // cuando valga cero sera false y no seguira añadiendo
                this.cart += 1;
                this.stock -= 1;
                if(this.stock == 0)
                    this.inStock=false;
            }
        },
        removeFromCart(){
            if(this.cart){
                this.cart -= 1;
                this.stock += 1;
            }
            this.inStock=true;
        },
        updateProduct(image){
            this.image2 = image;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})