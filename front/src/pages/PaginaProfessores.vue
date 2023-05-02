<template>
  <h1 class="title my-5 ml-5">Professores</h1>

  <v-container class="my-5 mx-1">
    <v-card class="pa-2 my-5">
      <v-container v-if="temProfessores">
        <v-container v-for="professor in professores" :key="professor.id">
          <v-banner lines="one" icon="mdi-account-box" color="teal-darken-2">
            <v-banner-text>
              {{ professor.primeiroNome }}
              {{ professor.ultimoNome }}
            </v-banner-text>
          </v-banner>
        </v-container>
      </v-container>
      <text-body-1 v-else>Nenhum professor registrado.</text-body-1>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    professores() {
      return this.$store.getters["pessoas/professores"];
    },
    temProfessores() {
      return this.$store.getters["pessoas/administradores"];
    },
  },
};
</script>
