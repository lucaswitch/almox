<template>
  <h1 class="title my-5 ml-5">Agenda</h1>

  <v-container class="my-5 mx-1">
    <v-card>
      <v-card-item>
        <v-card-title>Lista de Laboratórios</v-card-title>
        <v-card-subtitle>Laboratórios agendados recentemente</v-card-subtitle>
      </v-card-item>

      <v-container v-if="appointments.length > 0">
        <v-container v-for="(appointment, i) in appointments" :key="i">
          <v-banner lines="two" icon="mdi-microscope" color="teal-darken-2">
            <v-banner-text>
              <p class="font-weight-bold">{{ appointment.lab.name }}</p>
              <p>{{ getFriendlyDate(appointment.scheduled_at) }}</p>
            </v-banner-text>
          </v-banner>
        </v-container>
      </v-container>

      <v-card-actions>
        <v-btn color="teal-darken-2" rounded="pill" router to="/agenda/reservar"
          >Agendar Laboratório
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "@/contants";

export default {
  data() {
    return {
      appointments: [],
    };
  },
  mounted() {
    this.getAppointments();
  },
  methods: {
    getFriendlyDate(date) {
      return moment(date).local().format("LLLL");
    },
    async getAppointments() {
      try {
        const response = await axios.get(`${BASE_URL}/appointments`);
        this.appointments = response.data;
      } catch (err) {
        console.error(err);
        return [];
      }
    },
  },
};
</script>
