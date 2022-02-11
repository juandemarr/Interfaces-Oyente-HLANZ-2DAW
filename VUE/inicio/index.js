var app = new Vue({
    el : "#app",
    data : {
        message : "Hello there",
        author : "General Kenobi",
        image : "ahsoka.jpg",
        nameImage : "Ahsoka",
        onSale : true,
        stock : 0,
        details : ["your","move","you","fool"],
        variants : [
            {
                variantId : 1,
                variantDescription : "Grievous",
                image : "obi.jpg",
                variantColor : "green"
            },
            {
                variantId : 2,
                variantDescription : "Kenobi",
                image : "grievous.jpg",
                variantColor : "blue"
            }
        ]
    },
    methods : {
        addToCart(){
            this.stock += 1
        },
        removeFromCart(){
            if(this.stock) // cuando valga cero sera false y no seguira decrementando
                this.stock -= 1
        },
        cambiarImagen(image){
            this.image = image;
        }
    }
})