<template>
    <div id="container-classement">
        <Classement/>
    </div>
</template>

<script>
// import axios from "axios";
import Classement from "@/components/Classement.vue"
export default {
    name:"Vue-classement",
    components:{
      Classement  
    },
    data:function(){
        return{
            equipe:null
        }
    }
}

</script>

<style lang="scss" scoped>
</style>