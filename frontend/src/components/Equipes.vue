<template>
    <div id="grid-team">
        <li class="grid-item" v-for="equipe,index in equipes" :key="index">
            <a v-on:click="displayModalEquipe(equipe.id_equipe)">{{equipe.nom_equipe}}</a>
        </li>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Vue-equipes",
    data:function(){
        return {
            equipes:null
        }
    },
    mounted(){
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
    },
    methods:{
        displayModalEquipe(id){
            this.$emit("showEquipeEmit",id);
        }
    }
}
</script>

<style lang="scss" scoped>
#grid-team{
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:50px;
    grid-auto-rows: minmax(100px,auto);
    background-color: #0091ff;
    padding: 50px;
    border-radius: 12px;
    box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.5);

    .grid-item{
        display: flex;
        list-style-type: none;
        height: 100px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.3);
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        transition: transform .8s;

        a{
            font-size: 20px;
            font-weight: bold;
            display: block;
            line-height:  100px;
            width: 100%;
            height: 100%;
        }

        a:hover{
            cursor: pointer;
        }

    }
    li:hover{
            transform: scale(1.1);
    }
}
</style>