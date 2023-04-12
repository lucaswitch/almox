import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      laboratorios: [
        {
          id: "l1",
          nome: "Laboratório de Manipulação 1",
        },
        {
          id: "l2",
          nome: "Laboratório de Saúde",
        },
        {
          id: "l3",
          nome: "Laboratório de Nutrição 1",
        },
      ],

      agora: [
        {
          id: "a1",
          laboratorio: "Laboratório de Nutrição",
          hora: "15:00",
        },
      ],

      reservas: [
        {
          id: "r1",
          laboratorio: "Laboratório de Nutrição",
          data: "17 de outubro",
          hora: "15:00",
        },
        {
          id: "a2",
          laboratorio: "Laboratório de Manipulação 1",
          data: "18 de outubro",
          hora: "17:00",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
