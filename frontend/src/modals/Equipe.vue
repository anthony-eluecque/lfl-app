<template>
    <div id="container-equipe">
        <div id="equipe-content">
            <div id="property-team">
                <div id="identity">
                    <h2>Profile de l'équipe {{dataEquipe[0]?.nom_equipe}} </h2>
                    <p>Date de création : {{changeFormatDate(dataEquipe[0]?.date_creation)}}</p>
                    <p>Coach : {{dataCoach[0]?.pseudo_coach}}</p>
                </div>
                <div id="statistiques">
                    <h2>Quelques Statistiques</h2>
                    <p>Nombre de victoire(s) : {{dataClassement[dataEquipe[0]?.id_equipe-1]?.nb_win}}</p>
                    <p>Nombre de défaite(s)  : {{dataClassement[dataEquipe[0]?.id_equipe-1]?.nb_lose}}</p>
                    <p>Winrate : {{dataStatsEquipe[0]?.winrate}} %</p>
                    <p>KDA de l'équipe : {{dataStatsEquipe[0]?.kda_equipe}}</p>
                    <p>Durée moyenne d'une partie : {{dataStatsEquipe[0]?.moyenne_duree_game}}</p>
                </div>
            </div>

            <div id="content-table">
                <table id="responsive-table">
                    <thead>
                        <tr>
                            <th>Pseudo</th>
                            <th>Début Contrat</th>
                            <th>Fin contrat</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="item-row" v-for="player,index in dataJoueurs " :key="index">
                            <td>{{dataPseudoPlayer[player.id_joueur-1]?.pseudo}}</td>
                            <td>{{changeFormatDate(player.debut_contrat)}}</td>
                            <td v-if="player.fin_contrat">{{changeFormatDate(player.fin_contrat)}}</td>
                            <td v-else></td>
                            <td>{{player.id_role}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button id="closeButton" v-on:click="hideEquipe()">Fermer</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:"Vue-modal-equipe",
    data:function(){
        return {
            kdaEquipe : [],
            dataCoach : [],
            dataStatsEquipe : [],
            dataEquipe : [],
            dataJoueurs : [],
            dataPseudoPlayer : [],
            dataClassement : []
        }
    },  
    props:[
        "id_equipe"
    ],
    created(){
        const requestOne = axios.get("http://localhost:3000/equipes/" + this.id_equipe)
        const requestTwo = axios.get("http://localhost:3000/equipes/" + this.id_equipe + "/kda")
        const requestThree = axios.get("http://localhost:3000/equipes/" + this.id_equipe + "/coach")
        const requestFour = axios.get("http://localhost:3000/equipes/" + this.id_equipe + "/stats")
        const requestFive = axios.get("http://localhost:3000/equipes/"+ this.id_equipe + "/joueurs")
        const requestSix = axios.get("http://localhost:3000/players");
        const requestSeven = axios.get("http://localhost:3000/classement");

        axios.all([requestOne, requestTwo,requestThree,requestFour,requestFive,requestSix,requestSeven]).then(axios.spread((...responses) => {
            
            this.dataEquipe = responses[0].data;
            this.kdaEquipe = responses[1].data;
            this.dataCoach = responses[2].data;
            this.dataStatsEquipe = responses[3].data;
            this.dataJoueurs = responses[4].data;
            this.dataPseudoPlayer = responses[5].data;
            this.dataClassement = responses[6].data;

            })).catch(errors => {
                console.log(errors)
        })
    },
    methods:{
        hideEquipe(){
            this.$emit("hideEquipeEmit",false);
        },
        changeFormatDate(date){
            let d = new Date(date)
            return d.getDay() + "/" +  d.getMonth() + "/" +  d.getFullYear()
        }
    }
}
</script>


<style lang="scss">
#container-equipe{
    background-color:rgba(10, 7, 0, 0.562);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    #equipe-content{

        border-radius: 12px;
        margin: auto;
        max-width: 720px;
        margin-top: 50px;
        background-color: white;
        // background-color: #222831;
        padding: 25px 25px 0px 25px;
        #property-team{
            max-width: 700px;
            display: block;
            gap: 50px;
            grid-auto-rows: minmax(100px,auto);
        
            #identity,#statistiques{
                p,h2{
                    text-align: left;
                }
                h2{
                    padding-bottom: 10px;
                    border-bottom: 1px solid #0091ff;
                }
                background-color: white;
                margin-bottom: 10px;
            }
        }
        p{
            margin-top: 10px;
        }
    }
    #responsive-table{

            border-radius: 6px;
            font-size: 14px;
            font-weight: normal;
            border: none;
            border-collapse: collapse;
            width: 100%;
            max-width: 100%;
            white-space: nowrap;
            background-color: white;


            td,th{
                text-align: center;
                padding: 12px;
            }
            tr{
                transition: transform 0.4s;
            }
            tr:nth-child(even) {
                background: #F8F8F8;
            }
            thead{
                th{
                    color: #ffffff;
                    background: #0091ff ;
                }
                th:nth-child(odd) {
                    color: #ffffff;
                    background: #324960;
                }
            }
        }
        button{
            border: none;
            background-color: red;
            padding: 10px 30px 10px 30px;
            color: white;
            font-weight: bold;
            font-size: 12px;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
        }
}
</style>