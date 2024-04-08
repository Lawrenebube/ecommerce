<template>
    <section class="lg:mt-7 ">
        <div class=" px-6 md:px-0">
            <h2 class="text-Orange font-bold uppercase text-sm pt-8 md:pt-0" > {{ details.company }}</h2>
            <h3 class="text-3xl	text-black font-semibold py-4 w-80"> {{ details.name }}</h3>
            <p class="text-DarkGrayishBlue pb-3">{{ details.description }}            </p>

        </div>
        <div class="flex justify-between md:grid px-6 md:px-0">
            <p class="font-bold">
                <span class="text-black text-2xl">${{ details.calculatedCost }}.00 </span>
                <span class="text-Orange bg-PaleOrange text-sm px-1 ml-3"> {{ details.percentOff }}%</span>
            </p>
            <p class="text-GrayishBlue line-through text-sm "> ${{ details.mainCost }}.00</p>
        </div>
        <div class=" grid md:flex gap-4 mt-4">
            <button class="flex h-10 w-11/12 m-auto mx-6 md:mx-0 px-4 md:w-40 justify-between items-center bg-LightGrayishBlue rounded-md">
                <img @click="decreaseQuantity" class="bg-red-500" src="../assets/images/icon-minus.svg" alt="">
                <span> {{quantity}}</span>
                <img @click="increaseQuantity" src="../assets/images/icon-plus.svg" alt="">
            </button>
            <button @click="updateCart"
                class="flex items-center justify-center bg-Orange  h-10 w-11/12 md:w-52 m-auto mx-6 md:mx-0 rounded-md text-White text-sm">
                <div class="mr-2">
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 
                    1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 
                    0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 
                    0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 
                    0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/>
                </svg>
                </div>
                <span>  Add to cart</span>
            </button>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            details:{
             company:'Sneaker Company',
             name:'  Fall Limited Edition Sneakers',
             description:"These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
             company:'Sneaker Company',
             mainCost:  250 ,
             percentOff:  50,
             calculatedCost: '',
             totalCost:''
        },
            percent:'',
            quantity: 0
        }
    },
    created() {
        setTimeout(this.calculateCost, 100);
    },
    methods: {
        increaseQuantity() {
            this.quantity += 1
        },
        decreaseQuantity (){
            if (this.quantity >= 1) {
                this.quantity -= 1
 
            }
        },
        calculateCost () {
            this.percent = this.details.percentOff * 0.01;
            this.details.calculatedCost = this.percent * this.details.mainCost;
        },
        updateCart (){
            this.$emit('update-cart', {
                imageName: this.details.name,
                productNum: this.quantity,
                calCost: this.details.calculatedCost,
                tolCost: this.quantity * this.details.calculatedCost

            } );
            console.log(this.details.totalCost , this. details.calculatedCost)

        }
    }
}
</script>