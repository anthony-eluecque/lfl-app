<template>
    <div id="container-matchs">
        <Matchs @emitMatch="displayModalMatch"/>
        <Match @emitMatch="hideModalMatch" v-if="display_match" :id_match="id_match"/>
    </div>
</template>

<script>
import Matchs from '@/components/Matchs.vue';
import Match from '@/modals/Match.vue'
export default {
    name:"Matchs-view",
    data:function(){
        return {
            display_match : false,
            id_match : null,
        }
    },
    components:{
        Matchs,
        Match
    },
    methods:{
        displayModalMatch(id){
            this.id_match = id;
            this.display_match = true;
        },
        hideModalMatch(){
            this.display_match = false;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>