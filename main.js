Vue.component('product' , {
   template : `
   <div class="product">
        
   <div class="product-image">
     <img :src="image" />
   </div>

   <div class="product-info">
     <h1>{{ title }}</h1>
     <p v-if="inStock">In Stock</p>
     <p v-else>Out of Stock</p>
     <p>Shipping {{ Shipping }}</p>

     <ul>
       <li v-for="detail in details">{{ detail }}</li>
     </ul>


       <div class="color-box"
            v-for="(variant, index) in variants" 
            :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
            >
       </div> 

       <button v-on:click="addtoCart" 
         :disabled="!inStock"
         :class="{ disabledButton: !inStock }"
         >
       Add to cart
       </button>

       <div class="cart">
         <p>Cart({{ cart }})</p>
       </div>

     </div>  
   
 </div>

   ` ,
   props:{
    premuim:{
        type : Boolean ,
        required : true
    }
   },
    data() {
        return{
        product:'chaussettes' ,
        brand:'vue mastery',
        selectedVariant: 0,
        details :["80 % coton" , "20% polyester" , "Gender-Neutral"] ,
        variants:[
            {
                variantId : 225 ,
                variantColor : "green" ,
                variantImage : "./asset/green.jpg",
                variantQuantity : 10
            } ,
            {
                variantId : 334 ,
                variantColor : "blue" ,
                variantImage : "./asset/blue.jpg" ,
                variantQuantity : 0
            }
        ] ,
        cart : 0 
    } },
    methods :{
        addtoCart(){
            this.cart+=1
        } ,
        updateProduct(index){
            this.selectedVariant = index 
            console.log(index)
        }      
    } ,
    computed: {
        title() {
            return this.brand + ' ' + this.product  
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})

var app = new Vue({
    el : '#app'
})