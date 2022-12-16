<template>
    <div id="container-display">
        <h2>La liste des équipes</h2>
        <Equipes @showEquipeEmit="displayEquipe" />
        <Equipe @hideEquipeEmit="hideEquipe" v-if="displayEquipeModal" :id_equipe="idDisplay"/>
    </div>
</template>

<script>
import Equipes from "@/components/Equipes.vue";
import Equipe from "@/modals/Equipe.vue";
export default {
    name:"Vue-equipes",
    data:function(){
        return{
            equipes : null,
            idDisplay : null,
            displayEquipeModal : false
        }
    },
    components:{
      Equipes,
      Equipe 
    },
    methods:{
        displayEquipe(id){
            console.log("test")
            this.idDisplay = id; 
            this.displayEquipeModal = true;
        },
        hideEquipe(){
            this.displayEquipeModal = false;
        }
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