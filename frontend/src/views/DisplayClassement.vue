<template>
    <div id="container-classement">
        <sideBarClassementVue/>
        <Classement :week="week"/>
    </div>
</template>

<script>
// import axios from "axios";
import Classement from "@/components/Classement.vue"
import sideBarClassementVue from "@/components/sideBarClassement.vue";
export default {
    name:"Vue-classement",
    components:{
      Classement,
      sideBarClassementVue  
    },
    data:function(){
        return{
            equipe:null,
            week:null
        }
    },
    created(){
        this.week = this.$route.params.week
    }
}

</script>

<style lang="scss">
#container-classement{
    display: flex;
}
</style>