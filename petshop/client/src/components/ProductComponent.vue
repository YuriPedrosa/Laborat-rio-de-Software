
<template>
  <div class="container">
    <h1>Produtos</h1>
    <hr>
    <p class="error" v-if="error">{{error}}</p>

    <div class="crate">
      <label for="create">Titulo</label>
      <input type="text" id="create" v-model="title" placeholder="Titulo">
      <button v-on:click="createProduct">Enviar</button>
    </div>

    <div class="products" 
      v-for="(product, index) in products" 
      v-bind:item="product" 
      v-bind:index="index"
      v-bind:key="product._id"
    >

      <p class="text">{{product.title}}</p>

    </div>
  </div>
</template>

<script>

import ProductService from '../services/ProductService';

export default {
  name: 'ProductComponent',
  data(){
    return{
      products:[],
      error: '',
      title: ''
    }
  },
  async created(){
    try {
      this.products = await ProductService.getProducts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods:{
    async createProduct(){
      await ProductService.insertProduct(this.title);
      this.products = await ProductService.getProducts();
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
