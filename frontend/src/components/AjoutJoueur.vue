<template>
<div id="Add-container">
    <h2>Ajouter un Joueur</h2>

    <form action="">
        <label for="name">
            <input type="text" id="nom" placeholder="Nom">
        </label>
        <label for="prenom">
            <input type="text" id="prenom" placeholder="Prenom">
        </label>
        <label for="pseudo">
            <input type="text" id="pseudo" placeholder="Pseudo">
        </label>
        <label for="Age">
            <input type="date" id="age" placeholder="Date Naissance Jour-Mois-Année">
        </label>
        <label for="Natio">
            <input type="text" id="natio" placeholder="Nationalité">
        </label>
    </form>
    <button v-on:click="postNewPlayer()">Ajouter</button>

</div>
</template>

<script>
// import axios from 'axios';
// import moment from 'moment';
export default {
    name:"Ajout-vue",
    props:[
        "nationalites"
    ],
    data:function(){
        return{
            idPlayer:"",
            dateNai:"",
            nomPlayer:"",
            prenomPlayer:"",
            natioPlayer:"",
            pseudoPlayer:""
        }
    },  
    methods:{
        postNewPlayer(){
            // this.pseudoPlayer = document.getElementById("pseudo").value
            // this.dateNai = moment(document.getElementById("age").value).format("DD-MM-YYYY")
            // this.nomPlayer = document.getElementById("nom").value
            // this.prenomPlayer = document.getElementById("prenom").value
            // this.nationalites.forEach(element => {
            //     if (element.libelle_nationalite==document.getElementById("natio").value)
            //         this.natioPlayer = element.id_nationalite
            // });
            // console.log(this.natioPlayer)
            // axios.post("http://localhost:3000/players",{
            //     // id_joueur: 
            //     pseudo: this.pseudo,
            //     nom: this.nomPlayer,
            //     prenom:this.prenomPlayer,
            //     date_naissance: this.dateNai,
            //     id_nationalite: this.natioPlayer,
            // })
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });

        }
    }
}
</script>

<style lang="scss" scoped>
#Add-container{
    margin-top: 50px;
    display: flex;
    background-color: #4453a1;
    vertical-align: middle;
    color: white;

    border-radius: 8px;

    h2{
        margin-left: 25px;
    }
    form{
        margin-top: 15px ;
    }

    input{
        border-radius: 8px;
        border: none;
        margin-left: 25px;
        padding: 10px;
    }

    button{
        background-color: #42b883;
        color: white;
        font-weight: bold;
        font-size: 15px;
        border: none;
        height: 40px;
        margin-top: 15px;
        margin-left: 50px;
        border-radius: 8px;
    }

    button:hover{
        cursor: pointer;
    }
}
</style>