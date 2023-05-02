<template>
  <h1 class="title my-5 ml-5">Devolver</h1>

  <v-container class="my-5 mx-1">
    <v-card>
      <form-devolver class="my-5 mx-1"></form-devolver>
    </v-card>
  </v-container>
</template>

<script>
import FormDevolver from "../components/FormDevolver.vue";

export default {
  components: {
    FormDevolver,
  },
};
</script>
