<template>
    <div class="container-players">
        <Joueurs :detail_joueurs="detail_joueurs" :nationalites="nationalites"  />
    </div>
</template>

<script>
import axios from "axios";
import Joueurs from "@/components/Joueurs.vue"
export default {
    name:"Vue-joueurs",
    data:function(){
        return{
            detail_joueurs : null,
            nationalites : null
        }
    },
    components:{
      Joueurs 
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