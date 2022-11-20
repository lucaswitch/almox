<template>
  <h1>Agenda</h1>
  <ul v-if="temLaboratorios">
    <li v-for="laboratorio in listaLaboratorios" :key="laboratorio.id">
      {{ laboratorio.nome }}
    </li>
  </ul>
  <p v-else>Não há laboratórios registrados.</p>
  <button>
    <router-link to="/agenda/reservar">Reservar laboratório</router-link>
  </button>
</template>

<script>
export default {
  computed: {
    listaLaboratorios() {
      return this.$store.getters.laboratorios;
    },
    temLaboratorios() {
      return this.$store.getters.temLaboratorios;
    },
  },
};
</script>
