<template>
  <h1 class="title my-5 ml-5">Página Inicial</h1>

  <v-container class="my-5 mx-1">
    <v-row wrap>
      <v-col cols="8">
        <v-card class="pa-2 my-5">
          <v-card-title>Materiais</v-card-title>
          <v-card-subtitle>
            Materiais manipulados recentemente
          </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col offset="1">
                <text-caption class="font-weight-bold"
                  >Nome do Produto</text-caption
                >
              </v-col>
              <v-col>
                <text-caption class="font-weight-bold">Quantidade</text-caption>
              </v-col>
              <v-col>
                <text-caption class="font-weight-bold"
                  >Data de Manipulação</text-caption
                >
              </v-col>
            </v-row>
            <v-container v-if="temMateriais">
              <v-container v-for="material in materiais" :key="material.id">
                <v-banner lines="one" icon="mdi-flask" color="teal-darken-2">
                  <v-row>
                    <v-col>
                      <v-banner-text>{{ material.nome }}</v-banner-text>
                    </v-col>
                    <v-col>
                      <v-banner-text class="ml-4">
                        {{ material.estoque }}
                      </v-banner-text>
                    </v-col>
                    <v-col>
                      <v-banner-text class="ml-7">
                        {{ material.dataEntrada }}
                      </v-banner-text>
                    </v-col>
                  </v-row>
                </v-banner>
              </v-container>
            </v-container>
            <text-body-1 v-else>
              Nenhum material foi manipulado recentemente.
            </text-body-1>
          </v-card-text>
        </v-card>

        <v-card class="pa-2 my-5">
          <v-card-title>Alertas</v-card-title>
          <v-card-subtitle>
            Materiais próximos de expirar ou em falta
          </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col offset="1">
                <text-caption class="font-weight-bold"
                  >Nome do Produto</text-caption
                >
              </v-col>
              <v-col>
                <text-caption class="font-weight-bold">Lote</text-caption>
              </v-col>
              <v-col>
                <text-caption class="font-weight-bold">Alerta</text-caption>
              </v-col>
            </v-row>
            <v-container v-if="temMateriais">
              <v-container v-for="alerta in alertas" :key="alerta.id">
                <v-banner
                  lines="one"
                  icon="mdi-beaker-alert"
                  color="teal-darken-2"
                >
                  <v-row>
                    <v-col>
                      <v-banner-text>{{ alerta.nome }}</v-banner-text>
                    </v-col>
                    <v-col>
                      <v-banner-text class="ml-4">
                        {{ alerta.lote }}
                      </v-banner-text>
                    </v-col>
                    <v-col>
                      <v-banner-text class="ml-7">
                        {{ alerta.tipoAlerta }}
                      </v-banner-text>
                    </v-col>
                  </v-row>
                </v-banner>
              </v-container>
            </v-container>
            <text-body-1 v-else>
              Nenhum material foi manipulado recentemente.
            </text-body-1>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="pa-2 my-5">
          <v-card-title>Neste momento</v-card-title>
          <v-card-subtitle>Laboratórios sendo utilizados agora</v-card-subtitle>
          <v-container v-if="temAgora">
            <v-container v-for="sala in agora" :key="sala.id">
              <v-banner lines="two" icon="mdi-microscope" color="teal-darken-2">
                <v-banner-text>{{ sala.laboratorio }}</v-banner-text>
                <v-banner-text>Até às {{ sala.hora }} horas</v-banner-text>
              </v-banner>
            </v-container>
          </v-container>
          <text-body-1 v-else>
            Nenhum laboratório está sendo utilizado no momento.
          </text-body-1>
        </v-card>

        <v-card class="pa-2 my-5">
          <v-card-title>Reservas</v-card-title>
          <v-card-subtitle>
            Laboratórios agendados para os próximos dias
          </v-card-subtitle>
          <v-container v-if="temReservas">
            <v-container v-for="reserva in reservas" :key="reserva.id">
              <v-banner lines="two" icon="mdi-microscope" color="teal-darken-2">
                <v-banner-text>{{ reserva.laboratorio }}</v-banner-text>
                <v-banner-text>
                  Para {{ reserva.data }} às {{ reserva.hora }} horas
                </v-banner-text>
              </v-banner>
            </v-container>
          </v-container>
          <text-body-1 v-else>
            Nenhum laboratório está sendo utilizado no momento.
          </text-body-1>
          <v-card-actions>
            <v-btn rounded="pill" color="teal-darken-2" router to="/agenda">
              Ver mais
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    materiais() {
      return this.$store.getters["materiais/materiais"];
    },
    temMateriais() {
      return this.$store.getters["materiais/temMateriais"];
    },
    alertas() {
      return this.$store.getters["materiais/alertas"];
    },
    temAlertas() {
      return this.$store.getters["materiais/temAlertas"];
    },
    agora() {
      return this.$store.getters["agenda/agora"];
    },
    temAgora() {
      return this.$store.getters["agenda/temAgora"];
    },
    reservas() {
      return this.$store.getters["agenda/reservas"];
    },
    temReservas() {
      return this.$store.getters["agenda/temReservas"];
    },
  },
};
</script>
