<template>
    <div class="accueil-container">
        <NavBar/>
        <div class="content">
            <p>Retrouvez toutes les statistiques  de la LFL Spring 2022 !</p>
        </div>
        <div id="footer">
            <img src="@/assets/fond-accueil.png">
        </div>
        <div class="madeBy">
            <p class="auteur">Auteurs : Frédéric DOURNEL - Anthony ELUECQUE - Benjamin FOURNIER</p> 
        </div>
    </div>
</template>


<script>
import NavBar from '@/components/navBar.vue';

export default {
    name:"Vue-Accueil",
    components:{NavBar}
}   
</script>

<style lang="scss" scoped>
.accueil-container{
    display: flex;

    #footer {
        position:fixed;
        right:0;
        bottom:0;
        margin:0;
        padding:0;
        width: fit-content;
        height: 715px;
    }

    .madeBy{
        position: fixed;
        bottom: 0;
        height: 20px;
        margin-left: 250px;
    }

    .content p{
        font-family: 'Bebas Neue', cursive;
        font-size:500%;
        color:rgb(50, 73, 96);
    }

    .content{
        width: 70vw;
        text-align: left;
        margin-left: 50px;
    }
}
</style>