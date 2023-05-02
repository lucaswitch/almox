<template>
  <h1 class="title my-5 ml-5">Reservar</h1>

  <v-container class="my-5 mx-1">
    <v-card>
      <v-card-item>
        <v-card-title>Agendamento de Laboratório</v-card-title>
        <v-card-subtitle>
          Preencha o formulário com as informações necessárias para agendar o
          laboratório
        </v-card-subtitle>
      </v-card-item>
      <form-agenda class="my-5 mx-1"></form-agenda>
    </v-card>
  </v-container>
</template>

<script>
import FormAgenda from "../components/FormAgenda.vue";

export default {
  components: {
    FormAgenda,
  },
};
</script>
