<template>
    <div class="main">
      <AccueilView></AccueilView>
      <router-view></router-view>
    </div>
</template>
  
<script>
import AccueilView from './AccueilView.vue';
export default {
    name: 'Main-vue',
    data() { return {

      }
    },
    components: {
        AccueilView
    },
  }
</script>

<style>
.main{
  display: inherit;
  width: 100%;
}
</style>