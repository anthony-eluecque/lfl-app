<template>
    <div id="classement">
        <h1>{{title}}</h1>
        <table id="responsive-table">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Nom de l'équipe</th>
                    <th>Nombre de victoire</th>
                    <th>Nombre de défaites</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr class="item-row" v-for="equipe,index in classement" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{equipes[equipe.id_equipe-1]?.nom_equipe}}</td>
                    <td>{{equipe?.nb_win}}</td>
                    <td>{{equipe?.nb_lose}}</td>
                    <!-- <td>{{equipe.nb_win/equipe.nb_lose}}</td> -->
                    <!-- <td><button>Statistiques</button></td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Classement-vue",
    data:function(){
        return {
            title: null,
            classement:null,
            equipes:null,
            roles:null
        }
    },
    props:[
        'week'
    ],
    created(){
        axios
            .get("http://localhost:3000/equipes")
            .then((res) => {
                this.equipes = res.data;
                console.log(this.equipes);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    mounted(){
        if ((this.week) != null){
            this.callApiWeek();
            this.title = `Classement du Week ${this.week}`;
        }
        else{
            this.callApiNoWeek();
            this.title = "Classement sur la totalité du split summer 2022";
        }
    },
    methods:{
        callApiNoWeek(){
            axios
            .get("http://localhost:3000/classement")
            .then((res) => {
                this.classement = res.data;
                console.log(this.classement);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        callApiWeek(){
            axios
            .get("http://localhost:3000/classement/"+this.week)
            .then((res) => {
                this.classement = res.data;
                console.log(this.classement);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss">
#classement{
    display: flex;
    flex-direction: column;
    width: calc(100vw - 400px);
    // width: 90%;
    // margin-left: auto;
    // margin-right: auto;
    h1{
        margin-top: 50px;
    }

    #responsive-table{
        border-collapse: collapse;
        font-size: 25px;
        min-width: 400px;
        margin: auto;
        margin-top: 40px;
        thead{
            tr{
                background-color: #000;
                color: white;
            }
        }
        td{
            border-bottom: 1px solid black;
        }

        th,td{
            padding: 20px 15px;
        }

        button{
            border: none;
            padding: 10px;
            background-color:#0091ff;
            border-radius: 8px; 
            font-size: 16px;
            color: white;
            font-weight: bold;
        }
        button:hover{
            cursor: pointer;
        }
    }
}
</style>