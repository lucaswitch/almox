import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      materiais: [
        {
          id: "m1",
          nome: "Ácido Enzimático",
          lote: "A1B41C423",
          formulaQuimica: "C4H3",
          concentracao: "14g/cm",
          pesoMolecular: "13u",
          marca: "Aleator",
          validade: "13/12/2022",
          quantidade: "2",
          unidadeMedida: "gramas",
          estoque: "12",
          situacao: "Completo",
          dataEntrada: "27/11/2022",
          observacoes: "Nenhuma observação.",
        },
        {
          id: "m2",
          nome: "Ácido Clorídrico",
          lote: "A14AA1466",
          formulaQuimica: "C4H3",
          concentracao: "14g/cm",
          pesoMolecular: "13u",
          marca: "Aleator",
          validade: "13/12/2022",
          quantidade: "10",
          unidadeMedida: "quilos",
          estoque: "12kg",
          situacao: "Completo",
          dataEntrada: "15/06/2022",
          observacoes: "Nenhuma observação.",
        },
        {
          id: "m3",
          nome: "Glicose Enzimática",
          lote: "A44444466",
          formulaQuimica: "C4H3",
          concentracao: "14g/cm",
          pesoMolecular: "13u",
          marca: "Aleator",
          validade: "13/12/2022",
          quantidade: "10",
          unidadeMedida: "gramas",
          estoque: "12kg",
          situacao: "Completo",
          dataEntrada: "03/01/2022",
          observacoes: "Nenhuma observação.",
        },
      ],

      alertas: [
        {
          id: "a1",
          nome: "Glicose Enzimática",
          tipoAlerta: "Produto próximo do vencimento.",
          lote: "A41244466",
        },
        {
          id: "a2",
          nome: "Ácido Clorídrico",
          tipoAlerta: "Produto acabando.",
          lote: "A44444466",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
