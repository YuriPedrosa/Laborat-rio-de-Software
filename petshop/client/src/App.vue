<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <AnimalComponet />
    </v-content>

  </v-app>
</template>

<script>
import AnimalComponet from './components/AnimalComponet.vue'

export default {
  name: 'App',

  components: {
    AnimalComponet
  },

  data: () => ({
    //
  }),
};
</script>
