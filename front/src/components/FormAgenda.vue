<template>
  <v-form class="px-3">
    <v-row>
      <v-col>
        <v-select
          clearlable
          color="teal-darken-2"
          label="Laboratório"
          :items="labs"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Quantidade de alunos"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Data da aula"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Horário"
        ></v-text-field>
      </v-col>
    </v-row>
    <p class="font-weight-bold">Materiais</p>
    <p>Selecione os materiais que serão utilizados na aula</p>
    <v-row class="mt-2">
      <v-col cols="9">
        <v-select
          clearlable
          color="teal-darken-2"
          label="Material"
          :items="mats"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-text-field
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
      class="mt-5"
      clearable
      auto-grow
      color="teal-darken-2"
      label="Observações"
    ></v-textarea>

    <v-btn class="mr-2" rounded="pill" color="teal-darken-2">Enviar</v-btn>
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
export default {
  data() {
    return {
      labs: [
        "Laboratório de Manipulação 1",
        "Laboratório de Manipualção 2",
        "Laboratório de Nutrição",
        "Laboratório de Saúde",
      ],
      mats: ["Ácido 1", "Ácido 2", "Ácido 3", "Ácido 4"],
    };
  },
};
</script>
