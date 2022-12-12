<template>
    <!-- <div id="container-equipes"> -->
        <h3>Classement</h3>
    <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
    name:"Vue-classement",
    data:function(){
        return{
            classement : null
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
            .get("http://localhost:3000/classement")
            .then((res) => {
                this.classement = res.data;
                console.log(this.classement);
            })
            .catch((error) => {
                console.log(error);
            })

    }
}

</script>

<style lang="scss" scoped>
</style>