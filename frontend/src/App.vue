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
  // background-image: url(https://upload.wikimedia.org/wikipedia/commons/4/43/1cun0172_Jpg_%28125315201%29.jpeg);
  // opacity: 0.2;
}

*{
    margin: 0;
    padding: 0;
}

</style>
