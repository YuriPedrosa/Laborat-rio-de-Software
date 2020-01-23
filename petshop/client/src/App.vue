<template>
  <div id="app">
    <AnimalComponent />
  </div>
</template>

<script>
//import ProductComponent from './components/ProductComponent.vue'
import AnimalComponent  from './components/AnimalComponet.vue'

export default {
  name: 'app',
  components: {
    //ProductComponent,
    AnimalComponent    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
