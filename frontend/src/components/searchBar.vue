<template>
    <div id="searchBar">
        <h2>Faites une recherche</h2>
        <input type="text" v-model="search" :placeholder="text">
    </div>
</template>

<script>
export default {
  data:function(){
    return{
      search:"",
    }
  },
  props:[
    "text"
  ],
  watch:{
    search(newSearch){
      this.search = newSearch
      this.$emit('searchPlayer',this.search)
    }
  }
};
</script>

<style lang="scss" scoped>
#searchBar{
    margin-top: 50px;
    background-color: #0091ff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.5);
    h2{
        float: left;
        color: white;
        font-size: 25px;
        margin-top: 10px;
    }

    input{
        padding-top: 10px;
        padding-bottom: 10px;
        border: None;
        font-size: 15px;
        width: 100%;
        border-radius: 8px;
    }
}
</style>