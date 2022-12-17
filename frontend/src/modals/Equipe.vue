<template>
    <div id="container-equipe">
        <div id="equipe-content">
            <button id="closeButton" v-on:click="hideEquipe()">X</button>

            <div id="property-team">
                <div id="identity">
                    <h2>Profile</h2>
                    <p>Nom: {{dataEquipe[0]?.nom_equipe}}</p>
                    <p>Date de création : {{dataEquipe[0]?.date_creation}}</p>
                    <p>Coach : {{dataCoach[0]?.pseudo_coach}}</p>
                </div>
                <div id="statistiques">
                    <h2>Quelques Statistiques</h2>
                    <p>Nombre de victoire(s) : </p>
                    <p>Nombre de défaite(s)  :</p>
                    <p>KDA de l'équipe : {{dataStatsEquipe[0]?.kda_equipe}}</p>
                    <p>Winrate : {{dataStatsEquipe[0]?.winrate}} %</p>
                    <p>Durée moyenne d'une partie : {{dataStatsEquipe[0]?.moyenne_duree_game}}</p>
                </div>
            </div>

            <div id="table-content">
                <table>
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
                            <td>{{player.id_joueur}}</td>
                            <td>{{player.debut_contrat}}</td>
                            <td v-if="player.fin_contrat">{{player.fin_contrat}}</td>
                            <td v-else></td>
                            <td>{{player.id_role}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
            dataJoueurs : []
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

        axios.all([requestOne, requestTwo,requestThree,requestFour,requestFive]).then(axios.spread((...responses) => {
            
            this.dataEquipe = responses[0].data;
            this.kdaEquipe = responses[1].data;
            this.dataCoach = responses[2].data;
            this.dataStatsEquipe = responses[3].data;
            this.dataJoueurs = responses[4].data;

            })).catch(errors => {
                console.log(errors)
        })
    },
    methods:{
        hideEquipe(){
            this.$emit("hideEquipeEmit",false);
        }
    }
}
</script>


<style lang="scss" scoped>
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
        margin-top: 5   0px;
        background-color: #222831;
        padding: 25px;

        #property-team{
            max-width: 700px;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 50px;
            grid-auto-rows: minmax(100px,auto);
            margin: auto;
        
            #identity,#statistiques{
                p,h2{
                    text-align: left;
                }
                h2{
                    padding-bottom: 10px;
                    border-bottom: 1px solid #f95959;
                }
                padding: 10px;
                background-color: white;
            }
        }


        #table-content{
            border-collapse: collapse;
            font-size: 25px;
            max-width: 700px;
            margin: auto;
            margin-top: 40px;

            table{
                width: 100%;
                margin: auto;
            }

            thead{
                tr{
                    background-color: #f95959;
                    color: white;
                }
            }
            td{
                gap: 40px;
            }

            th,td{  
                padding-left: 8px;
                padding-right: 8px;
                padding-top: 8px;
                padding-bottom: 8px;
            }
            tbody{
                td{
                    // border-radius: 0;
                    background-color: #eeeeee;
                    // border-bottom : 1px solid #ff5722;
                }
            }


        }
    }
}
</style>