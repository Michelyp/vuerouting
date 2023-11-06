<template>
<h1>Titulo estatico</h1>
<TablaMenu/>
<hr/>
<router-view></router-view>
<hr/>
</template>

<script>
import TablaMenu from './components/TablaMenu.vue'
export default {
  name: 'App',
  components:{
    TablaMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
