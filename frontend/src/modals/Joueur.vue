<template>
    <div id="container">
        <div id="player-content">
            <div id="identity">{{data_joueur}}</div>
            <button id="closeButton" v-on:click="closeDetail()">Fermer</button>
        </div>
    </div>
</template>


<script>
export default {
    name:"Vue-joueur",
    props:[
        "data_joueur"
    ],
    methods:{
        closeDetail(){
            this.$emit('hidePlayer',false);
        }
    }
    // voir avec axios et les routes pour récupérer les identifiants de chaque personne
}
</script>


<style lang="scss" scoped>
#container{
    background-color:rgba(10, 7, 0, 0.562);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    #player-content{
        width: 400px;
        background-color: white;
        border-radius: 25px;
        margin: auto;
        margin-top: 200px;
    }
}
</style>