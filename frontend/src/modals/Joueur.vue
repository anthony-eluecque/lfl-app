<template>
    <div id="container">
        <div id="player-content">
            <div id="identity">
                <h2>Profile </h2>
                <p>Nom : {{data_joueur.nom}}</p>
                <p>Prénom : {{data_joueur.prenom}}</p>
                <p>Date de Naissance : {{data_joueur.date_naissance}}</p>
                <p>Nationalité : {{nationalites[data_joueur.id_nationalite-1].libelle_nationalite}} </p>
            </div>
            <div id="champions">
                <h2>Ses champions les plus joués</h2>
            </div>
            <div id="equipe">
                <h2>Son équipe</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Joueurs</th>
                            <th>Rôles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="item-row" v-for="player,index in joueursEquipe" :key="index">
                            <td>{{player.id_joueur}}</td>
                            <td>{{player.id_role}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="matchs">
                <h2>Ses meilleurs matchs</h2>
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
            nationalites : null,
            joueursEquipe : null,
            dataPlayers : null,
            dataRoles : null
        }
    }, 
    methods:{
        closeDetail(){
            this.$emit('hidePlayer',false);
        }
    },
    mounted(){
        axios
            .get("http://localhost:3000/nationalites")
            .then((res) => {
                this.nationalites = res.data;
                console.log(this.nationalites);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    beforeUpdate(){
        axios
            .get("http://localhost:3000/equipes/"+this.data_joueur.id_joueur)
            .then((res) => {
                this.joueursEquipe = res.data
                // console.log(this.joueursEquipe)
            })
            .catch((error) => {
                console.log(error);
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