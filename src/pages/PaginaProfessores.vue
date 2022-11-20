<template>
  <h1>Professores</h1>
  <ul v-if="temProfessores">
    <li v-for="professor in listaProfessores" :key="professor.id">
      {{ professor.nome }}
    </li>
  </ul>
  <p v-else>Não há professores registrados.</p>
</template>

<script>
export default {
  computed: {
    listaProfessores() {
      return this.$store.getters.professores;
    },
    temLaboratorios() {
      return this.$store.getters.temProfessores;
    },
  },
};
</script>
