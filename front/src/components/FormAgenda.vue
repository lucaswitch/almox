<template>
  <v-form 
    class="px-3"
    @submit.prevent="postLabAppointment"
  >
    <v-row>
      <v-col>
        <v-select
          v-model="labId"
          clearlable
          color="teal-darken-2"
          label="Laboratório"
          :items="labs"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          v-model="studentCapacity"
          clearable
          color="teal-darken-2"
          label="Quantidade de alunos"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="date"
          v-mask="'##/##/####'"
          clearable
          color="teal-darken-2"
          label="Data da aula"
          prepend-inner-icon="mdi-calendar-range"
        >
      <v-date-picker></v-date-picker>
      </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="time"
          v-mask="'##:##'"
          clearable
          color="teal-darken-2"
          label="Horário"
          append-inner-icon="mdi-clock-time-eight"
        ></v-text-field>
      </v-col>
    </v-row>
    <p class="font-weight-bold">Materiais</p>
    <p>Selecione os materiais que serão utilizados na aula</p>
    <v-row class="mt-2">
      <v-col cols="9">
        <v-select
          v-model="materialObj.materialId"
          clearlable
          color="teal-darken-2"
          label="Material"
          :items= 'mats'
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="materialObj.quantity"
          clearable
          color="teal-darken-2"
          label="Quantidade"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn
      prepend-icon="mdi-plus"
      variant="text"
      rounded="pill"
      color="teal-darken-2"
      >Adicionar</v-btn
    >

    <v-textarea
      v-model="note"
      class="mt-5"
      clearable
      auto-grow
      color="teal-darken-2"
      label="Observações"
    ></v-textarea>

    <v-btn class="mr-2" rounded="pill" color="teal-darken-2" @click ="postLabAppointment">Enviar</v-btn>
    <v-btn
      class="ml-2"
      variant="text"
      rounded="pill"
      color="teal-darken-2"
      router
      to="/agenda"
      >Cancelar</v-btn
    >
  </v-form>
</template>

<script>
import axios from 'axios'
import {mask} from 'vue-the-mask'
export default {
  data() {
    return {
      labsList: [],
      materialList: [],
      labs: [],
      mats: [],

      labId: '',
      studentCapacity: null,
      date: '',
      time: '',
      materialObj: { 
        materialId: null,
        quantity: null,
      },
      note: '',
    };
  },

  directives: {mask},

  mounted() {
      this.getLabs();
      this.getMaterials();
  },

  methods: {
    getLabs:function() {
      var vm = this;
      axios.get('http://34.151.221.81:81/labs')
      .then((response) => {
        vm.labsList = response.data;
        response.data.forEach(element => {
          vm.labs.push(element.name)
        });
      }).catch(function(error){
          console.log('erros : ',error);
      }) 
    },

    getMaterials:function() {
      var vm = this;
      axios.get('http://34.151.221.81:81/materials')
      .then((response) => {
        vm.materialList = response.data;
        response.data.forEach(element => {
          vm.mats.push(element.name)
        });
      }).catch(function(error){
          console.log('erros : ',error);
      }) 
    },

    postLabAppointment:function() {
      console.log("here")
      axios
      .post('http://34.151.221.81:81/appointments', {lab_id: this.labId, student_capacity: this.studentCapacity,
      scheduled_at: this.date , material_ids: this.materialObj, note: this.note })
      .then((response) => console.log(response))
    },
  }
};
</script>