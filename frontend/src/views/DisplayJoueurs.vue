<template>
    <div class="container-players">
        <h1>La liste des joueurs de la LFL</h1>
        <searchBar :text="text" @searchPlayer="setSearch"/>
        <AddPlayer :nationalites="nationalites"/>
        <Joueurs @displayPlayer="showPlayerEmit" :searchPlayer="searchPlayer" :nationalites="nationalites"  />
        <Joueur @hidePlayer="hidePlayerEmit" v-if="display_detail_joueur" :data_joueur="data_detail_joueur"/>
    </div>
</template>

<script>
import axios from "axios";
import searchBar from "@/components/searchBar.vue";
import Joueurs from "@/components/Joueurs.vue";
import Joueur from "@/modals/Joueur.vue";
import AddPlayer from "@/components/AjoutJoueur.vue";
export default {
    name:"Vue-joueurs",
    data:function(){
        return{
            text : "Taper le nom d'un joueur",
            nationalites : null,
            display_detail_joueur : false,
            data_detail_joueur : null,
            searchPlayer:""
        }
    },
    components:{
      Joueurs,
      Joueur,
      searchBar,
      AddPlayer
    },
    mounted(){
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
            // this.data_detail_joueur = null;
        },
        setSearch(content){
            this.searchPlayer = content
        }
    }
}

</script>

<style lang="scss" scoped>
.container-players{
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding : 0px 10px 0px 10px;
}
</style>