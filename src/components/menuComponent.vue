<template>
    <div class="absolute left-0 z-40 h-screen bg-white w-4/6 font-Kumbh font-semibold text-VeryDarkBlue pl-5 pt-4 top-0 ">
        <p @click="closeMenu" class="cursor-pointer  ;
">
            <img src="../assets/images/icon-close.svg" alt="">
        </p>
        <div class="grid gap-2 pt-10">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            closeMenu(){
                this.$emit('close-menu', {})
            }
        }
    }
</script>