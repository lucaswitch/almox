<template>
  <v-form class="px-3">
    <p class="font-weight-bold">Registro de material</p>
    <p class="mb-3">
      Preencha o formulário informando os dados corretamente para adicionar o
      material
    </p>
    <v-row>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Nome do produto"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Lote"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Fórmula química"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Concentração"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Peso molecular"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Marca"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Data de entrada"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Data de validade"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Quantiadade"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          clearable
          color="teal-darken-2"
          label="Unidade de Medida"
          :items="unidadeMedida"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          color="teal-darken-2"
          label="Estoque"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-textarea
      class="mt-5"
      clearable
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
      unidadeMedida: ["Mililitros", "Litros", "Miligramas", "Gramas", "Quilos"],
    };
  },
};
</script>
