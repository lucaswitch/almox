<template>
  <h1 class="title my-5 ml-5">Agenda</h1>

  <v-container class="my-5 mx-1">
    <v-card>
      <v-card-item>
        <v-card-title>Lista de Laboratórios</v-card-title>
        <v-card-subtitle>Laboratórios agendados recentemente</v-card-subtitle>
      </v-card-item>

      <v-container v-if="temReservas">
        <v-container v-for="reserva in reservas" :key="reserva.id">
          <v-banner lines="two" icon="mdi-microscope" color="teal-darken-2">
            <v-banner-text>
              <p class="font-weight-bold">{{ reserva.laboratorio }}</p>
              <p>{{ reserva.data }} às {{ reserva.hora }}</p>
            </v-banner-text>
          </v-banner>
        </v-container>
      </v-container>

      <v-card-actions>
        <v-btn color="teal-darken-2" rounded="pill" router to="/agenda/reservar"
          >Agendar Laboratório</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    reservas() {
      return this.$store.getters["agenda/reservas"];
    },
    temReservas() {
      return this.$store.getters["agenda/temReservas"];
    },
  },
};
</script>
