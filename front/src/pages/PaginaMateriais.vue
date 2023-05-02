<template>
  <h1 class="title my-5 ml-5">Materiais</h1>

  <v-container class="my-5 mx-1">
    <v-card class="pa-2 my-5">
      <v-container v-if="temMateriais">
        <v-container v-for="material in materiais" :key="material.id">
          <v-banner lines="one" icon="mdi-flask" color="teal-darken-2">
            <v-banner-text>
              {{ material.nome }} -
              {{ material.id }}
            </v-banner-text>
            <template v-slot:actions>
              <v-btn color="teal-darken-2" router :to="materialLink"
                >Detalhes</v-btn
              >
            </template>
          </v-banner>
        </v-container>
      </v-container>
      <text-body-1 v-else>Nenhum material registrado.</text-body-1>
      <v-card-actions>
        <v-btn
          color="teal-darken-2"
          rounded="pill"
          router
          to="/materiais/registrar"
          >Registrar Material</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    materiais() {
      return this.$store.getters["materiais/materiais"];
    },
    temMateriais() {
      return this.$store.getters["materiais/temMateriais"];
    },
    materialLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
