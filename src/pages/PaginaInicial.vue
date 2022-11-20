<template>
  <h1>Página Inicial</h1>
  <div>
    <h2>Materiais</h2>
    <p>Materiais manipulados recentemente</p>
    <ul v-if="temMateriais">
      <li v-for="material in listaMateriais" :key="material.id">
        {{ material.nome }} {{ material.quantidade }} g
        {{ material.data }}
      </li>
    </ul>
    <p v-else>Não há materiais manipulados recentemente.</p>
  </div>
  <div>
    <h2>Alertas</h2>
    <p>Materiais próximos de expirar ou em falta</p>
    <ul v-if="temAlertas">
      <li v-for="alerta in listaAlertas" :key="alerta.id">
        {{ alerta.nome }}
      </li>
    </ul>
    <p v-else>Não há alertas.</p>
  </div>
  <div>
    <h2>Neste momento</h2>
    <p>Laboratórios sendo utilizados agora</p>
    <ul v-if="temLaboratoriosAgora">
      <li v-for="laboratorioA in laboratoriosAgora" :key="laboratorioA.id">
        {{ laboratorioA.nome }}
      </li>
    </ul>
    <p v-else>Não há laboratórios sendo utilizados no momento.</p>
  </div>
  <div>
    <h2>Reservas</h2>
    <p>Laboratórios agendados para os próximos dias</p>
    <ul v-if="temLaboratorios">
      <li v-for="laboratorio in listaLaboratorios" :key="laboratorio.id">
        {{ laboratorio.nome }}
      </li>
    </ul>
    <p v-else>Não há laboratórios agendados.</p>
    <button><router-link to="/agenda">Ver mais</router-link></button>
  </div>
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
    listaAlertas() {
      return this.$store.getters.alertas;
    },
    temAlertas() {
      return this.$store.getters.temAlertas;
    },
    listaLaboratoriosAgora() {
      return this.$store.getters.laboratoriosAgora;
    },
    temLaboratoriosAgora() {
      return this.$store.getters.temLaboratoriosAgora;
    },
    listaLaboratorios() {
      return this.$store.getters.laboratorios;
    },
    temLaboratorios() {
      return this.$store.getters.temLaboratorios;
    },
  },
};
</script>
