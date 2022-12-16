<template>
    <div id="container">
        <div id="player-content">
            <div id="identity">
                <h2>Profile </h2>
                <p>Nom : {{data_joueur.nom}}</p>
                <p>Prénom : {{data_joueur.prenom}}</p>
                <p>Date de Naissance : {{data_joueur.date_naissance}}</p>
                <p>Nationalité : {{nationalites[data_joueur.id_nationalite-1]}}</p>
            </div>
            <div id="champions">
                <h2>Ses champions les plus joués</h2>
                <ul>
                    <li v-for="champ,index in dataChamp" :key="index">
                        {{champ.champ_nom}}
                    </li>
                </ul>
            </div>
            <div id="equipe">
                <h2>Son équipe : {{"AFFICHER"}}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Joueurs</th>
                            <th>Rôles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="item-row" v-for="player,index in joueursEquipe" :key="index">
                            <td>{{dataPlayers[player.id_joueur-1].pseudo}}</td>
                            <td>{{dataRoles[player.id_role-1].nom_role}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="matchs">
                <h2>Ses meilleurs matchs</h2>
                <div id="container-matchs">
                    
                    <ul v-for="match,index in dataBestMatchs" :key="index">
                        <li>{{dataEquipes[dataMatchs[match.v_id_match-1].id_equipe_1-1].nom_equipe}} VS {{dataEquipes[dataMatchs[match.v_id_match-1].id_equipe_2-1].nom_equipe}}</li>
                        <!-- <li>KDA : {{dataMatchsJoueur[].kda}} </li> -->
                    </ul>

                </div>
            </div>
        </div>
        <button id="closeButton" v-on:click="closeDetail()">Fermer</button>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:"Vue-joueur",
    props:[
        "data_joueur",
    ],
    data:function(){
        return {
            nationalites : [],
            joueursEquipe : null,
            dataPlayers : null,
            dataRoles : null,
            dataMatchs : null,
            dataEquipes : null,
            dataBestMatchs : null,
            dataMatchsJoueur : null,
            dataChamp : null,
        }
    }, 
    methods:{
        closeDetail(){
            this.$emit('hidePlayer',false);
        }
    },
    created(){
        const requestOne = axios.get("http://localhost:3000/nationalites");
        const requestTwo = axios.get("http://localhost:3000/players");
        const requestThree = axios.get("http://localhost:3000/roles");
        const requestFour = axios.get("http://localhost:3000/matchs");
        const requestFive = axios.get("http://localhost:3000/equipes");
        axios.all([requestOne, requestTwo, requestThree,requestFour,requestFive]).then(axios.spread((...responses) => {
            
            this.nationalites = responses[0].data;
            this.dataPlayers = responses[1].data;
            this.dataRoles = responses[2].data;
            this.dataMatchs = responses[3].data;
            this.dataEquipes = responses[4].data;



            })).catch(errors => {
                console.log(errors)
        })
    },
    mounted(){
        const requestOne = axios.get("http://localhost:3000/players/"+this.data_joueur.id_joueur+"/mates")
        const requestTwo = axios.get("http://localhost:3000/players/"+this.data_joueur.id_joueur+"/bmatchs")
        const requestThree = axios.get("http://localhost:3000/players/"+this.data_joueur.id_joueur+"/matchs")
        const requestFour = axios.get("http://localhost:3000/players/"+this.data_joueur.id_joueur+"/champions")
        
        axios.all([requestOne, requestTwo,requestThree,requestFour]).then(axios.spread((...responses) => {
            
            this.joueursEquipe = responses[0].data;
            this.dataBestMatchs = responses[1].data;
            this.dataMatchsJoueur = responses[2].data;
            this.dataChamp = responses[3].data;

            })).catch(errors => {
                console.log(errors)
        })

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
        max-width: 800px;
        // min-width: 700px;
        background-color: #0091ff;
        border-radius: 24px;
        margin: auto;
        margin-top: 200px;
        padding: 25px;
        padding-top: 10px;
        display: grid;
        grid-template-columns:  repeat(2,1fr);
        gap:50px;
        grid-auto-rows: minmax(100px,auto);

        #identity{
            background-color: white;
            padding: 20px;
            border-radius: 24px;
            padding-top: 15px;
            p,h2{
                text-align: left;
            }
            h2{
                color:#0091ff;
                font-weight: bold;
                font-size: 24px;
                padding-bottom: 10px;
                border-bottom: 3px solid #0091ff;
            }
            p{
                font-weight: bold;
            }
        }
        #champions{
            background-color: white;
            // height: fit-content;
            border-radius: 24px; 
            padding: 18px;
            padding-bottom: 12px;
            h2{
                padding-bottom: 12px;
                text-align: left;
                color: #0091ff;
                border-bottom: 3px solid #0091ff;
                font-size: 23px;
            }
        }

        #matchs{
            background-color: white;
            border-radius: 24px;
        }

        #equipe{
            background-color: white;
            border-radius: 24px;

            padding: 18px;
            padding-bottom: 12px;
            padding-top: 12px;
            table{
                margin:auto;
            }
            h2{
                text-align: left;
                border-bottom: 3px solid #0091ff;
                padding-bottom: 10px;
                color: #0091ff;
            }   

        }

        #matchs{
            padding: 18px;
            padding-top: 12px;
            h2{
                text-align: left;
                color: #0091ff;
                border-bottom: 3px solid #0091ff;
                padding-bottom:10px;
            }
        }
    }
    #closeButton{
            background-color: #f95959;
            border: none;
            padding: 6px 24px 12px 24px;
            color: white;
            font-size: 20px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            
        }
}
</style>