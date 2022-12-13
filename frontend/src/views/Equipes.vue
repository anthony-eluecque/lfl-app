<template>
    <!-- <div id="container-equipes"> -->
        <h3>equipes</h3>
    <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
    name:"Vue-equipes",
    data:function(){
        return{
            equipes : null
        }
    },
    // components:{
    //   equipe  
    // },
    mounted(){
        console.log('Mounted');
        // const route = this.$route.params;
        // const id_joueur = route['id']
        axios
            // .get("http://localhost:3000/players/"+id_joueur)
            .get("http://localhost:3000/equipes")
            .then((res) => {
                this.equipes = res.data;
                console.log(this.equipes);
            })
            .catch((error) => {
                console.log(error);
            })

    }
}

</script>
<style lang="scss" scoped>

</style>