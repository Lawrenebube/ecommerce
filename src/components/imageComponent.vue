<template>
    <section>
        <div class="flex items-center relative max-w-2xl">
            <div v-if="showArrows||showrows"
                class=" h-10 w-10 rounded-full grid justify-center m-auto left-2 bg-White absolute md:-left-4" 
                @click="prevImage">
                <img src="../assets/images/icon-previous.svg" class="m-auto" alt="">

            </div>
            <img :src="selectedImage"
                class="h-2/4 w-auto md:w-3/4 md:h-3/4 md:rounded-lg sm:pointer-events-none md:pointer-events-auto	 "
                alt="" @click="popImage">

            <div v-if="showArrows||showrows"
                class=" h-10 w-10 rounded-full justify-center grid bg-White absolute right-2 md:right-24" 
                @click="nextImage">
                <img src="../assets/images/icon-next.svg" class="m-auto" alt="">
            </div>
        </div>
        <div class="hidden md:flex  justify-between gap-1 pt-4 h-1/6 md:w-3/4  ">
            <img v-for="(image, index) in images" :key="index" :src="image" alt="Thumbnail Image"
                :class="{ 'opacity-50 border-2  bg-White border-Orange': index === selectedImageIndex }"
                class="rounded-md hover:opacity-50 md:h-12 lg:h-16 cursor-pointer" @click="changeImage(index)">


        </div>


    </section>
</template>
<script>
import image1 from "@/assets/images/image-product-1-thumbnail.jpg"
import image2 from "@/assets/images/image-product-2-thumbnail.jpg"
import image3 from "@/assets/images/image-product-3-thumbnail.jpg"
import image4 from "@/assets/images/image-product-4-thumbnail.jpg"
import bigimage1 from "@/assets/images/image-product-1.jpg"
import bigimage2 from "@/assets/images/image-product-2.jpg"
import bigimage3 from "@/assets/images/image-product-3.jpg"
import bigimage4 from "@/assets/images/image-product-4.jpg"

export default {
    data() {
        return {
            images: [
                image1, image2, image3, image4

            ],
            bigImages: [
                bigimage1, bigimage2, bigimage3, bigimage4
            ],
            selectedImageIndex: 0,
            showOverlay: false,
            showrows:false

        }
    },
    props:{
        showArrows: {
            type: Boolean,
            default: false
        }
    },
    components: {
    },
    created(){
        setTimeout(this.showrow, 100);

    },
    computed: {
        selectedImage() {
            return this.bigImages[this.selectedImageIndex];

        }
    },
    methods: {
        changeImage(index) {
            this.selectedImageIndex = index;
        },
        prevImage() {
            this.selectedImageIndex = (this.selectedImageIndex - 1 + this.bigImages.length) % this.bigImages.length;

        },
        nextImage() {
            this.selectedImageIndex = (this.selectedImageIndex + 1) % this.bigImages.length;

        },
        popImage() {
            if (window.innerWidth <= 640) {
                console.log('no')
            }
            else
                this.$emit('pop-image', {
                })

        },
        showrow(){
            if (window.innerWidth <= 640) {
                this.showrows = true
            }
            else  
            
            {
            
            }
        }

    }

}
</script>