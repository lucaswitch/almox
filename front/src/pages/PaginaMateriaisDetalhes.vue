<template>
  <h1 class="title my-5 ml-5">Detalhes do Material</h1>

  <v-container class="my-5 mx-1">
    <v-card class="pa-2 my-5">
      <v-card-item>
        <v-card-title>{{ nome }}</v-card-title>
        <v-card-subtitle>{{ formulaQuimica }}</v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <p><span class="font-weight-bold">Lote:</span> {{ lote }}</p>
        <p>
          <span class="font-weight-bold">Concentração:</span> {{ concentracao }}
        </p>
        <p>
          <span class="font-weight-bold">Peso Molecular:</span>
          {{ pesoMolecular }}
        </p>
        <p><span class="font-weight-bold">Marca:</span> {{ marca }}</p>
        <p><span class="font-weight-bold">Validade:</span> {{ validade }}</p>
        <p>
          <span class="font-weight-bold">Quantidade:</span> {{ quantidade }}
          {{ unidadeMedida }}
        </p>
        <p><span class="font-weight-bold">Estoque:</span> {{ estoque }}</p>
        <p>
          <span class="font-weight-bold">Observações:</span> {{ observacoes }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="teal-darken-2" router to="/materiais">Voltar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      materialSelecionado: null,
    };
  },
  computed: {
    nome() {
      return this.materialSelecionado.nome;
    },
    formulaQuimica() {
      return this.materialSelecionado.formulaQuimica;
    },
    lote() {
      return this.materialSelecionado.lote;
    },
    concentracao() {
      return this.materialSelecionado.concentracao;
    },
    pesoMolecular() {
      return this.materialSelecionado.pesoMolecular;
    },
    marca() {
      return this.materialSelecionado.marca;
    },
    validade() {
      return this.materialSelecionado.validade;
    },
    quantidade() {
      return this.materialSelecionado.quantidade;
    },
    unidadeMedida() {
      return this.materialSelecionado.unidadeMedida;
    },
    estoque() {
      return this.materialSelecionado.estoque;
    },
    observacoes() {
      return this.materialSelecionado.observacoes;
    },
  },
  created() {
    this.materialSelecionado = this.$store.getters["materiais/materiais"].find(
      (materiais) => materiais.id === this.id
    );
  },
};
</script>
