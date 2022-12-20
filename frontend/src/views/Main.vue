<template>
    <div class="main">
      <navBarVue/>
      <router-view></router-view>
    </div>
</template>
  
<script>
import navBarVue from '@/components/navBar.vue';
export default {
    name: 'Main-vue',
    data() { return {

      }
    },
    components: {
        navBarVue
    },
  }
</script>

<style>
.main{
  display: inherit;
  width: 100%;
}
</style>