import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      // Lista de materiais
      materiais: [
        {
          id: "m1",
          nome: "Ácido Úrico Enzimático",
          quantidade: 123,
          lote: "ABC123",
          data: "12/03/2022",
        },
        {
          id: "m2",
          nome: "Cloreto de Sódio",
          quantidade: 789,
          lote: "XYZ987",
          data: "09/04/2022",
        },
      ],
      // Lista de materiais com alertas
      alertas: [],
      // Lista de laboratorios
      laboratorios: [
        {
          id: "lab1",
          nome: "Laboratório de Manipulação 1",
        },
        {
          id: "lab2",
          nome: "Laboratório de Análise Clínica 2",
        },
        {
          id: "lab3",
          nome: "Laboratório de Nutrição 1",
        },
      ],
      // Lista de laboratórios sendo utilizados
      laboratoriosAgora: [],
      // Lista de professores
      professores: [],
      // Lista de administradores
      administradores: [],
    };
  },
  mutations,
  actions,
  getters,
};
