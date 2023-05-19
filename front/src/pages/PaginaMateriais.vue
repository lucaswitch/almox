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
    <button @click="getMaterials">Get materials</button>
    <div>
      {{ materialList }}
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  props: ["id"],

  data() {
    return {
      materialList: []
    }
  },
  methods: {
    getMaterials:function() {
      var vm = this;
      axios.get('http://34.151.221.81/materials')
      .then((response) => {
        vm.materialList = response.data;
          console.log(vm.materialList);
      }).catch(function(error){
          console.log('erros : ',error);
      }) 
    }
  },



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
