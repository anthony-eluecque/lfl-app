<template>
    <nav id="nav-bar">
        <ul>
            <li id="li-accueil">
                <a href="/">Accueil</a>
            </li>
            <li>
                <a href="classement">Classement LFL</a>
            </li>
            <li>
                <a href="matchs">Matchs</a>
            </li>
            <li>
                <a href="equipes">Equipes</a>
            </li>
            <li>
                <a href="joueurs">Joueurs</a>
            </li>
        </ul>
    </nav>
</template>


<script>
export default {
    name:"Vue-navBar"
}
</script>

<style lang="scss" scoped>
nav{
    min-height: 100vh;
    min-width: 200px;
    max-width: 200px;
    // padding-bottom: 15px;
    display: flex;
    background-color: #0091ff;
    ul{
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
        height: 60px;

        li{
            width: 100%;
            border-bottom: 1px dotted white;
            a{
                font-size: large;
                display: block;
                padding: 20px;
                text-decoration: none;
                color: white;
                font-weight: bold;
            }
        }
        li:hover{
            
            background-color: white;
            a{
                color: #0091ff;
            }
        }
    }
}

</style>