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
    padding-bottom: 15px;
    border-bottom: 1px solid black;
}
ul{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li{ 
        border-radius: 10px;
        a{
            font-size: large;
            display: block;
            padding: 15px;
            text-decoration: none;
            color: black;
        }
    }
    li:hover{
        
        background-color: #0091ff;
        a{
            color: white;
        }
    }
    #li-accueil{
        background-color: #0091ff;
        a{
            font-weight: bold;
            color: white;
        }
    }
}

</style>