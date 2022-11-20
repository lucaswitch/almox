<template>
  <h1>Materiais</h1>
  <ul v-if="temMateriais">
    <li v-for="material in listaMateriais" :key="material.id">
      {{ material.nome }} {{ material.quantidade }} g
      {{ material.data }}
    </li>
  </ul>
  <p v-else>Não há materiais.</p>
</template>

<script>
export default {
  computed: {
    listaMateriais() {
      return this.$store.getters.materiais;
    },
    temMateriais() {
      return this.$store.getters.temMateriais;
    },
  },
};
</script>
