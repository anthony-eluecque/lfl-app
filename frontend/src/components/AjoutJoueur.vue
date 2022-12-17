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
        <button v-on:click="postNewPlayer()">Ajouter</button>
    </form>

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
    width: 90%;
    background-color: #4453a1;
    align-items: center;
    color: white;
    padding: 25px;

    border-radius: 8px;

    form{
        display: grid;
        grid-template-columns:  repeat(6,1fr);
        gap: 10px;
        grid-auto-rows: minmax(5px,auto);   
    }

    input{
        border-radius: 8px;
        border: none;
        padding: 10px;
        width: 70%;
    }

    button{
        background-color: #42b883;
        color: white;
        font-weight: bold;
        font-size: 15px;
        border: none;
        // height: 50%;
        border-radius: 8px;
    }

    button:hover{
        cursor: pointer;
    }
}
</style>