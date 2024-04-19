<template>
    <div class="absolute bg-White shadow-2xl z-20 w-82 md:w-96  m-auto right-0 left-0 md:left-auto md:-right-10 md:top-8 top-12 rounded-lg min-h-64 md:min-h-44">
        <h1 class="border-b-2 py-2 px-4 border-LightGrayishBlue font-bold">Cart</h1>
        <div v-if="cartDetails.num == 0" class="text-center flex items-center justify-center h-44 text-GrayishBlue font-semibold "> 
            <p>Your Cart is empty</p>
        </div>
        <div v-else class="grid place-content-center w-80 m-auto md:w-96 pt-3 gap-1 md:gap-2 h-32 md:h-auto  text-DarkGrayishBlue ">
            <div class="flex gap-3">
                <img class="h-10 mt-2 rounded-md " src="../assets/images/image-product-1-thumbnail.jpg" alt="">
                <div class="leading-7">
                    <p> {{ cartDetails.name }}</p>
                    <p>
                        <span>  ${{ cartDetails.calculatedCost }}.00</span> x
                        <span>{{ cartDetails.num }}</span>
                        <span class="text-black font-semibold"> ${{ cartDetails.totalCost }}.00</span>
                    </p>
                </div>
                <div class="h-8 cursor-pointer  m-auto" @click="emptyCart">
                    <img class="mt-2" src="../assets/images/icon-delete.svg" alt="">
                </div>
            </div>

            <button class="bg-Orange   text-White w-80 py-1 tracking-wider rounded-lg flex items-center justify-center">Checkout</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cartEmpty:true,
            showitems:false
        }
    },
    props: {
        cartDetails:{
            type: Object,
            default: () => ({
            num : '',
            name:'',
            calculatedCost: '',
            totalCost: ''
            })
        }
    },
    methods : {
        emptyCart() {
            this.cartDetails.num = 0
        }
    }
}
</script>