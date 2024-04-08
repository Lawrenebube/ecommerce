<script setup>
import headerComponent from '@/components/headerComponent.vue';
import imageComponent from '@/components/imageComponent.vue';
import descriComponent from '@/components/descriptionComponent.vue'
</script>

<template>
  <main class=" grid  m-auto min-h-4/6 md:max-w-7xl z-10 font-Kumbh mb-10 md:mb-0  ">
    <headerComponent :cartDetails="cartDetails" />

    <div class="md:grid grid-cols-2 md:w-4/6 md:mt-20 lg:mt-12  place-self-center">
      <imageComponent @pop-image="showImage" />
      <descriComponent @update-cart="handleCart" />
    </div>
    <div v-if="showOverlay" class="absolute inset-0 bg-black opacity-80 z-10"></div>

    <div v-if="showOverlay" class=" absolute z-20  max-w-md  m-auto inset-x-6 top-5  ">
      <div class=" cursor-pointer h-6  ml-72 pl-8" @click="closeImage">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill=" hsl(26, 100%, 55%)" fill-rule="evenodd" />
        </svg>
      </div>
      <imageComponent :showArrows="true" class="z-30" /> 

    </div>

  </main>
</template>
<script>
export default {
  data() {
    return {
      cartDetails: {
        num: '',
        name: '',
        calculatedCost: '',
        totalCost: ''
      },
      showOverlay: false,
      showArrows:false

    }
  },
  components: {
    headerComponent,
    imageComponent,
    descriComponent
  },
  methods: {
    handleCart(data) {
      this.cartDetails.name = data.imageName;
      this.cartDetails.num = data.productNum;
      this.cartDetails.calculatedCost = data.calCost;
      this.cartDetails.totalCost = data.tolCost
    },
    showImage(data) {
      this.showOverlay = true
      this.showArrows = true

    },
    closeImage (){
      this.showOverlay = false
    }


  }
}
</script>
