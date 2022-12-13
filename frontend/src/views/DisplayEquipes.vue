<template>
    <div id="container-display">
        <h2>La liste des équipes</h2>
        <Equipes/>
    </div>
</template>

<script>
import Equipes from "@/components/Equipes.vue"
export default {
    name:"Vue-equipes",
    data:function(){
        return{
            equipes : null
        }
    },
    components:{
      Equipes  
    }
}

</script>
<style lang="scss" scoped>
#container-display{
    margin-top: 50px;

    h2{
        color: black;
        font-size: 25px
    }
}
</style>