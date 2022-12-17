<template>
    <div id="container">
        <div id="container-modal-match">

            <button v-on:click="closeDetail()">Fermer</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Vue-modal-match",
    props:[
        'id_match'
    ],
    methods:{
        closeDetail(){
            this.$emit('emitMatch',false);
        }
    }
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

    #container-modal-match{
        max-width: 800px;
        background-color: gold;
        margin: auto;
        margin-top:200px;
    }
}
</style>