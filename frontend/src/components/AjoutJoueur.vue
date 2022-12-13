<template>
<div id="Add-container">
    <h2>Ajouter un Joueur</h2>

    <form action="">
        <label for="name">
            <input type="text" placeholder="Nom">
        </label>
        <label for="prenom">
            <input type="text" placeholder="Prenom">
        </label>
        <label for="pseudo">
            <input type="text" placeholder="Pseudo">
        </label>
        <label for="Age">
            <input type="date" placeholder="Date Naissance Jour-Mois-Année">
        </label>
        <label for="Natio">
            <input type="text" placeholder="Nationalité">
        </label>
    </form>
    <button>Ajouter</button>

</div>
</template>

<script>
export default {
    name:"Ajout-vue"
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