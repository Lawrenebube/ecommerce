<template>
    <div class="grid grid-cols-3   px-5 md:px-3 py-3 gap-5 md:border-b-2 border-LightGrayishBlue">
        <section class="flex justify-around md:grid md:grid-cols-4  md:justify-between gap-5 col-span-2 md:w-full">
            <div class="md:hidden cursor-pointer" @click="showMenuOptions">
                <img src="../assets/images/icon-menu.svg" class="h-5" alt="">
            </div>
            <div v-if="showMenu" class="transition-transform duration-300" >
                <menuComponent @close-menu="closeMenuOption"/>
            </div>
            <div v-if="showMenu" class="absolute inset-0 bg-black opacity-80 z-10"></div>

            <div class="">
                <img src="../assets/images/logo.svg" class="h-4  " alt="">
            </div>
            <div class="hidden md:flex md:justify-evenly  col-span-3  ">
                <RouterLink to=""> Collections</RouterLink>
                <RouterLink to=""> Men</RouterLink>
                <RouterLink to=""> Women</RouterLink>
                <RouterLink to=""> About</RouterLink>
                <RouterLink to=""> Contact</RouterLink>

            </div>
        </section>
        <section class="flex gap-5 col-start-4">
            <div class="relative">
                <img @click="showCarte" src="../assets/images/icon-cart.svg" class="h-5 cursor-pointer" alt="">
                <div>
                    <span v-if="cartDetails.num == 0" class="hidden"></span>
                    <span v-else
                        class="absolute -top-2  -right-1 w-4 h-3 flex  rounded-lg text-s justify-center  bg-Orange text-White">
                        {{ cartDetails.num }}
                    </span>
                </div>
                <div v-if="showCart">
                    <cartComponent :cartDetails="cartDetails" />

                </div>
            </div>
            <div>
                <img src="../assets/images/image-avatar.png" class="h-5 cursor-pointer" alt="">
            </div>
        </section>
    </div>
</template>
<script>
import cartComponent from '@/components/cartComponent.vue';
import menuComponent from '@/components/menuComponent.vue'
export default {
    name: 'HomeView',
    components: {
        cartComponent,
        menuComponent
    },
    data() {
        return {
            showCart: false,
            showMenu:false
        }
    },
    props: {

        cartDetails: {
            type: Object,
            default: () => ({
                num: '',
                name: '',
                calculatedCost: '',
                totalCost: ''
            })
        },
    },
    methods: {
        showCarte() {
            this.showCart = !this.showCart
        },
        updateCart(data) {
            // Emitting 'update-cart' event with the received data
            this.$emit('update-cart', data)
        },
        showMenuOptions(){
            this.showMenu = true
        },
        closeMenuOption() {
            this.showMenu = false

        }

    }
}
</script>