<template>
    <div id="container">
        <div id="container-modal-match">
            <h2>Equipe 1 : {{this.dataEquipes[this.dataMatchs[this.id_match-1]?.id_equipe_1-1]?.nom_equipe}}</h2>
            <table class="responsive-table">
                <thead>
                    <tr>
                        <th>Joueur</th>
                        <th>Kills</th>
                        <th>Morts</th>
                        <th>Assists</th>
                        <th>Total creeps tuées</th>
                        <th>Champion Choisi</th>
                        <th>Champion Banni</th>
                        <th>KDA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="player,i in dataTeamPlayers_1" :key="i">
                        <td>{{dataPlayers[player.id_joueur-1]?.pseudo}}</td>
                        <td>{{dataMatch[i]?.kills_joueur}}</td>
                        <td>{{dataMatch[i]?.mort_joueur}}</td>
                        <td>{{dataMatch[i]?.assists_joueur}}</td>
                        <td>{{dataMatch[i]?.total_creeps_tues}}</td>
                        <td>{{dataMatch[i]?.id_champion_choisi}}</td>
                        <td>{{dataMatch[i]?.id_champion_banni}}</td>
                        <td>KDA</td>
                    </tr>
                </tbody>
            </table>
            <h2>Equipe 2 : {{this.dataEquipes[this.dataMatchs[this.id_match-1]?.id_equipe_2-1]?.nom_equipe}}</h2>
            <table class="responsive-table">
                <thead>
                    <tr>
                        <th>Joueur</th>
                        <th>Kills</th>
                        <th>Morts</th>
                        <th>Assists</th>
                        <th>Total creeps tuées</th>
                        <th>Champion Choisi</th>
                        <th>Champion Banni</th>
                        <th>KDA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="player,i in dataTeamPlayers_2" :key="i">
                        <td>{{dataPlayers[player.id_joueur-1]?.pseudo}}</td>
                        <td>{{dataMatch[i+5]?.kills_joueur}}</td>
                        <td>{{dataMatch[i+5]?.mort_joueur}}</td>
                        <td>{{dataMatch[i+5]?.assists_joueur}}</td>
                        <td>{{dataMatch[i+5]?.total_creeps_tues}}</td>
                        <td>{{dataMatch[i+5]?.id_champion_choisi}}</td>
                        <td>{{dataMatch[i+5]?.id_champion_banni}}</td>
                        <td>KDA</td>
                    </tr>
                </tbody>
            </table>
            <button v-on:click="closeDetail()">Fermer</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"Vue-modal-match",
    props:[
        'id_match'
    ],
    data:function(){
        return {
            dataMatch : [],
            dataChampions : [],
            dataPlayers : [],
            dataEquipes : [],
            dataMatchs : [],
            dataTeamPlayers_1 :[],
            dataTeamPlayers_2 :[]
        }
    },
    mounted(){
        const requestOne = axios.get("http://localhost:3000/matchs/" + this.id_match);
        const requestTwo = axios.get("http://localhost:3000/champions");
        const requestThree = axios.get("http://localhost:3000/players");
        const requestFour = axios.get("http://localhost:3000/equipes");
        const requestFive = axios.get("http://localhost:3000/matchs/");

        axios.all([requestOne, requestTwo, requestThree,requestFour,requestFive]).then(axios.spread((...responses) => {
            
            this.dataMatch = responses[0].data;
            this.dataChampions = responses[1].data;
            this.dataPlayers = responses[2].data;
            this.dataEquipes = responses[3].data;
            this.dataMatchs = responses[4].data;

            const equipe = this.dataEquipes[this.dataMatchs[this.id_match-1]?.id_equipe_1-1]?.id_equipe

            axios
                .get("http://localhost:3000/equipes/"+equipe + "/joueurs")
                .then ((res)=> {
                    this.dataTeamPlayers_1 = res.data
                })
                .catch ((error) =>{
                    console.log(error)
                })
                
            const equipe_2 = this.dataEquipes[this.dataMatchs[this.id_match-1]?.id_equipe_2-1]?.id_equipe
            axios
                .get("http://localhost:3000/equipes/"+ equipe_2 + "/joueurs")
                .then ((res)=> {
                    this.dataTeamPlayers_2 = res.data
                })
                .catch ((error) =>{
                    console.log(error)
                })

            })).catch(errors => {
                console.log(errors)
        })
    },
    methods:{
        closeDetail(){
            this.$emit('emitMatch',false);
        }
    }
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

    #container-modal-match{
        background-color: white;
        margin: 100px 70px 70px;
        box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );

        h2{
            font-weight: bold;
            padding: 25px;
        }
        .responsive-table{
            
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
}
</style>