<template>
    <ul class="responsive-table">
        <h1>Les Joueurs de la LFL</h1>
        <li id="header-table">
            <div class="col col-1">
                Pseudo
            </div>
            <div class="col col-2">
                Nom
            </div>
            <div class="col col-3">
                Prénom
            </div>
            <div class="col col-4">
                Nationalité
            </div>
            <div class="col col-1">

            </div>
        </li>
        <li class="table-row" v-for="(player,index) in detail_joueurs" :key="index">
            <div class="col col-1" data-label="pseudo">
                <p>
                    {{detail_joueurs[index].pseudo}}
                </p>
            </div>
            <div class="col col-2" data-label="nom">
                <p>
                    {{detail_joueurs[index].nom}}
                </p>
            </div>
            <div class="col col-3" data-label="prenom">
                <p>
                    {{detail_joueurs[index].prenom}}
                </p>
            </div>
            <div class="col col-4" data-label="age">
                <p>
                    {{nationalites[(detail_joueurs[index].id_nationalite)-1].libelle_nationalite}}
                </p>
            </div>
            <button class="col col-5 showPlayer" v-on:click="displayPlayer(detail_joueurs[index])">Afficher</button>
        </li>
    </ul>
</template>

<script>    
export default {
    name:"Vue-joueurs",
    props:["detail_joueurs","nationalites"],
    methods:{
        displayPlayer(joueur){
            this.$emit('displayPlayer',joueur)
        }
    }
}
</script>

<style lang="scss" scoped>
.responsive-table{
        li{

            border-radius: 10px;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .table-row{
            background-color: #ffffff;
            box-shadow: 0px 1px 11px 0px rgba(0,0,0,0.4);
        }

        #header-table{
            margin-top: 50px;
            font-weight: bold;
            background-color: #000;
            box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
            div{
                color: white;
                font-size: 20px;
            }
        }
        .showPlayer{
            border: none;
            background: #42b883;
            color: white;
            padding: 15px;
            font-weight: bold;
            font-size: 15px;
            border-radius: 8px;

        }
        .showPlayer:hover{
            cursor: pointer;
        }

        h1{
            color: black;
            margin-top: 75px;
            font-size: 25px;
        }
        .col-1{
            flex-basis:10%;
        }
        .col-2 {
            flex-basis: 20%;
        }
        .col-3 {
            flex-basis: 25%;
        }
        .col-4 {
            flex-basis: 25%;
        }
    }

</style>