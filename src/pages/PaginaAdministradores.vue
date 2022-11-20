<template>
  <h1>Administradores</h1>
  <ul v-if="temAdministradores">
    <li v-for="administrador in listaAdministradores" :key="administrador.id">
      {{ administrador.nome }}
    </li>
  </ul>
  <p v-else>Não há professores registrados.</p>
</template>

<script>
export default {
  computed: {
    listaAdministradores() {
      return this.$store.getters.administradores;
    },
    temAdministradores() {
      return this.$store.getters.temAdministradores;
    },
  },
};
</script>
