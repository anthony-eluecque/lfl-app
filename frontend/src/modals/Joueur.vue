<template>
    <div id="container">
        <div id="player-content">
            <div id="identity">
                <h2>Profile </h2>
                <p>Nom : {{data_joueur.nom}}</p>
                <p>Prénom : {{data_joueur.prenom}}</p>
                <p>Date de Naissance : {{changeFormatDate(data_joueur.date_naissance)}}</p>
                <p>Nationalité : {{nationalites[data_joueur.id_nationalite-1]?.libelle_nationalite}}</p>
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
                <h2>Son équipe : {{dataEquipes[dTemp[0]?.id_equipe-1]?.nom_equipe}}</h2>
                <table id="responsive-table">
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
                        <li>{{
                            dataEquipes[dataMatchs[match.v_id_match-1].id_equipe_1-1].nom_equipe}} 
                            VS 
                            {{dataEquipes[dataMatchs[match.v_id_match-1].id_equipe_2-1].nom_equipe}}</li>
                        <!-- <p>{{dataMatchs[match.v_id_match-1]}}</p> -->
                        <!-- <p>KDA : {{dataMatchsJoueur[dataMatchs[match.v_id_match-1].id_match]?.kda}}</p> -->
                    </ul>

                </div>
                <button id="closeButton" v-on:click="closeDetail()">Fermer</button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:"Vue-modal-joueur",
    props:[
        "data_joueur",
    ],
    data:function(){
        return {
            nationalites : [],
            joueursEquipe : [],
            dataPlayers : [],
            dataRoles : [],
            dataMatchs : [],
            dataEquipes : [],
            dataBestMatchs : [],
            dataMatchsJoueur : [],
            dataChamp : [],
            dTemp : []
        }
    }, 
    methods:{
        closeDetail(){
            this.$emit('hidePlayer',false);
        },
        changeFormatDate(date){
            let d = new Date(date)
            return d.getDay() + "/" +  d.getMonth() + "/" +  d.getFullYear()
        }
    },
    created(){
        const requestOne = axios.get("http://localhost:3000/nationalites");
        const requestTwo = axios.get("http://localhost:3000/players");
        const requestThree = axios.get("http://localhost:3000/roles");
        const requestFour = axios.get("http://localhost:3000/matchs");
        const requestFive = axios.get("http://localhost:3000/equipes");
        const requestSix = axios.get("http://localhost:3000/players/" + this.data_joueur.id_joueur + "/equipe")
        axios.all([requestOne, requestTwo, requestThree,requestFour,requestFive,requestSix]).then(axios.spread((...responses) => {
            
            this.nationalites = responses[0].data;
            this.dataPlayers = responses[1].data;
            this.dataRoles = responses[2].data;
            this.dataMatchs = responses[3].data;
            this.dataEquipes = responses[4].data;
            this.dTemp = responses[5].data;

            console.log(this.dTemp)


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


<style lang="scss">
#container{
    background-color:rgba(10, 7, 0, 0.562);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    #player-content{
        max-width: 600px;
        margin: auto;   
        margin-top: 25px;

        #identity{
            background-color: white;
            padding: 20px 20px 0px 20px;
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
                margin-top:25px;
                font-weight: bold;
            }
        }
        #champions{
            background-color: white;
            padding: 18px;
            padding-bottom: 12px;
            h2{
                padding-bottom: 12px;
                text-align: left;
                color: #0091ff;
                border-bottom: 3px solid #0091ff;
                font-size: 23px;
            }
            ul{
                li{
                    text-align: left;
                    margin-top: 20px;
                }
            }
        }

        #matchs{
            background-color: white;
            ul{
                li{
                    margin-top: 25px;
                    text-align: left;
                }
            }
        }

        #equipe{
            background-color: white;

            padding: 18px;
            padding-bottom: 12px;
            padding-top: 12px;
            h2{
                text-align: left;
                border-bottom: 3px solid #0091ff;
                padding-bottom: 10px;
                color: #0091ff;
            }   

            #responsive-table{
                margin-top: 15px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: normal;
                border: none;
                border-collapse: collapse;
                width: 100%;
                max-width: 100%;
                white-space: nowrap;
                background-color: white;


                td,th{
                    text-align: center;
                    padding: 8px;
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

        }

        #matchs{
            padding: 18px 18px 0px 18px;
            padding-top: 12px;
            h2{
                text-align: left;
                color: #0091ff;
                border-bottom: 3px solid #0091ff;
                padding-bottom:10px;
            }
        }
    }
    button{
            border: none;
            background-color: red;
            padding: 10px 30px 10px 30px;
            color: white;
            font-weight: bold;
            font-size: 16px;
            margin-top: 10px;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
        }
}

li{
    list-style-type: none;
}
</style>