<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
*{
    margin: 0;
    padding: 0;
}
body{
    margin: 0;
    padding: 0;
}
</style>
