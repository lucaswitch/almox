<template>
  <h1 class="title my-5 ml-5">Materiais</h1>

  <v-container class="my-5 mx-1">
    <v-card class="pa-2 my-5">
      <v-container v-if="getMaterials">
        <v-container v-for="material in materialList" :key="material.id">
          <v-banner lines="one" icon="mdi-flask" color="teal-darken-2">
            <v-banner-text>
              {{ material.id }} -
              {{ material.name }}
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
          to="/materiais/registrar-materiais"
          >Registrar Material</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { BASE_URL } from "@/contants";
import axios from "axios";

export default {
  data() {
    return {
      materialList: [],
    };
  },

  mounted() {
    this.getMaterials();
  },

  methods: {
    getMaterials: function () {
      var vm = this;
      axios
        .get(`${BASE_URL}/materials`)
        .then((response) => {
          vm.materialList = response.data;
          console.log(vm.materialList);
        })
        .catch(function (error) {
          console.log("erros : ", error);
        });
    },
  },
};
</script>
