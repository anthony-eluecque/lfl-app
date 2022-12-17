<template>
    <nav id="nav-bar">
        <ul>
            <li>
                <a href="/classement/">Totalité du split</a>
            </li>
            <li>
                <a href="/classement/1">Week 1</a>
            </li>
            <li>
                <a href="/classement/2">Week 2</a>
            </li>
            <li>
                <a href="/classement/3">Week 3</a>
            </li>
            <li>
                <a href="/classement/4">Week 4</a>
            </li>
            <li>
                <a href="/classement/5">Week 5</a>
            </li>
            <li>
                <a href="/classement/6">Week 6</a>
            </li>
            <li>
                <a href="/classement/7">Week 7</a>
            </li>
            <li>
                <a href="/classement/8">Week 8</a>
            </li>
            <li>
                <a href="/classement/9">Week 9</a>
            </li>
        </ul>
    </nav>
</template>


<script>
export default {
    name:"Vue-sidebar-classement",
    methods:{

    }
}
</script>

<style lang="scss" scoped>
nav{
    min-height: 100vh;
    min-width: 200px;
    max-width: 200px;
    // padding-bottom: 15px;
    display: flex;
    background-color: #1484da;
    ul{
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
        height: 60px;

        li{
            width: 100%;
            border-bottom: 1px solid white;
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