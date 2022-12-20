<template>
    <div id="matchs">
        <div id="container-table">
            <table id="responsive-table">
                <thead>
                    <tr>
                        <th>Date du Match</th>
                        <th>Equipe 1</th>
                        <th>Equipe 2</th>
                        <th>Durée de la partie</th>
                        <th>WEEK</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-on:click="showLogMatch(match.id_match)" v-for="match,index in dataMatchs" :key="index">
                        <td>{{changeFormatDate(match?.date_match)}}</td>
                        
                        <td v-if="match?.vainqueur==match?.id_equipe_1" class="winner">
                            {{dataEquipes[match?.id_equipe_1-1]?.nom_equipe}}
                        </td>
                        <td v-else class="perdant">
                            {{dataEquipes[match?.id_equipe_1-1]?.nom_equipe}}
                        </td>

                        <td v-if="match?.vainqueur==match?.id_equipe_2" class="winner">
                            {{dataEquipes[match?.id_equipe_2-1]?.nom_equipe}}
                        </td>
                        <td v-else class="perdant">
                            {{dataEquipes[match?.id_equipe_2-1]?.nom_equipe}}
                        </td>
                        <td>{{match?.duree_match}} min</td>
                        <!-- <td>{{match?.vainqueur}}</td> -->
                        <td >{{match?.num_semaine}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name : "Matchs-vue",
    data:function(){
        return {
            dataMatchs : null
        }
    },
    mounted(){
        const requestOne = axios.get("http://localhost:3000/matchs");
        const requestTwo = axios.get("http://localhost:3000/equipes");
        
        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        
            this.dataMatchs = responses[0].data;
            this.dataEquipes = responses[1].data;
        })).catch(errors => {
                console.log(errors)
        })
    },
    methods:{
        showLogMatch(id_match){
            this.$emit("emitMatch",id_match);
        },
        changeFormatDate(date){
            let d = new Date(date)
            return d.getDay() + "/" +  d.getMonth() + "/" +  d.getFullYear()
        }
    }
}
</script>


<style lang="scss" scoped>
#matchs{
    max-width: 90%;
    margin: auto;
    margin-top: 50px;
    #container-table{
        margin: 10px 70px 70px;
        box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
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

            tr:hover{
                cursor: pointer;
                transform: scale(1.05);
                background-color: #fcf8f8;
            }
            .winner{
                color: green;
                font-weight:600;
            }

            .perdant{
                color: red;
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
}
</style>