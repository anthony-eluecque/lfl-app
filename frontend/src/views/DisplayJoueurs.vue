<template>
    <div class="container-players">
        <Joueurs @displayPlayer="showPlayerEmit" :detail_joueurs="detail_joueurs" :nationalites="nationalites"  />
        <Joueur @hidePlayer="hidePlayerEmit" v-if="display_detail_joueur" :data_joueur="data_detail_joueur"/>
    </div>
</template>

<script>
import axios from "axios";
import Joueurs from "@/components/Joueurs.vue"
import Joueur from "@/modals/Joueur.vue"
export default {
    name:"Vue-joueurs",
    data:function(){
        return{
            detail_joueurs : null,
            nationalites : null,
            display_detail_joueur : false,
            data_detail_joueur : null
        }
    },
    components:{
      Joueurs,
      Joueur
    },
    mounted(){
        // const route = this.$route.params;
        // const id_joueur = route['id']
        axios
            // .get("http://localhost:3000/players/"+id_joueur)
            .get("http://localhost:3000/players")
            .then((res) => {
                this.detail_joueurs = res.data;
                console.log(this.detail_joueurs);
            })
            .catch((error) => {
                console.log(error);
            })
        axios
            .get("http://localhost:3000/nationalites")
            .then((res) => {
                this.nationalites = res.data;
                console.log(this.nationalites);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    methods:{
        showPlayerEmit(joueur){
            this.data_detail_joueur = joueur;
            this.display_detail_joueur = true;
        },
        hidePlayerEmit(){
            this.display_detail_joueur = false;
            this.data_detail_joueur = null;
        }
    }
}

</script>

<style lang="scss" scoped>
.container-players{
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding : 0px 10px 0px 10px;
}
</style>