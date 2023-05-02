<template>
  <h1 class="title my-5 ml-5">Administradores</h1>

  <v-container class="my-5 mx-1">
    <v-card class="pa-2 my-5">
      <v-container v-if="temAdministradores">
        <v-container
          v-for="administrador in administradores"
          :key="administrador.id"
        >
          <v-banner lines="one" icon="mdi-account-box" color="teal-darken-2">
            <v-banner-text>
              {{ administrador.primeiroNome }}
              {{ administrador.ultimoNome }}
            </v-banner-text>
          </v-banner>
        </v-container>
      </v-container>
      <text-body-1 v-else>Nenhum administrador registrado.</text-body-1>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    administradores() {
      return this.$store.getters["pessoas/administradores"];
    },
    temAdministradores() {
      return this.$store.getters["pessoas/temAdministradores"];
    },
  },
};
</script>
