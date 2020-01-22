<template>
  <div id="app">
    <ProductComponent />
  </div>
</template>

<script>
import ProductComponent from './components/ProductComponent.vue'

export default {
  name: 'app',
  components: {
    ProductComponent
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
