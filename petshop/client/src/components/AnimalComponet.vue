
<template>
  <div class="container">
    <h1>Animals</h1>
    <hr>
    <p class="error" v-if="error">{{error}}</p>

    <div class="crate">
      <label for="create">Animal</label>
      <input type="text" id="create" v-model="animal.name" placeholder="Nome">
      <br>
      <input type="text" id="create" v-model="animal.type" placeholder="Tipo">
      <br>
      <input type="text" id="create" v-model="animal.breed" placeholder="Raça">
      <br>
      <input type="text" id="create" v-model="animal.size" placeholder="Tamanho">
      <br>
      <input type="text" id="create" v-model="animal.weight" placeholder="Peso">
      <br>
      <input type="text" id="create" v-model="animal.age" placeholder="Idade">
      <button v-on:click="createAnimal">Enviar</button>
    </div>

    <div class="animals" 
      v-for="(animal, index) in animals" 
      v-bind:item="animal" 
      v-bind:index="index"
      v-bind:key="animal._id"
    >
      <p class="text">{{animal.name}}</p>
    </div>
  </div>
</template>

<script>

import AnimalService from '../services/AnimalService';

export default {
  name: 'AnimalComponent',
  data(){
    return{
      animals:[],
      error: '',
      animal:{
        name: '', 
        type : '', 
        breed: '', 
        size: '', 
        weight: '', 
        age: ''
      }
    }
  },
  async created(){
    try {
      this.animals = await AnimalService.getAnimals();
      // eslint-disable-next-line no-console
      console.log(this.animals);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods:{
    async createAnimal(){
      await AnimalService.insertAnimal(this.animal);
      this.products = await AnimalService.getAnimals();
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
