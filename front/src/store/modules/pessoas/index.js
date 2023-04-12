import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      professores: [
        {
          id: "p1",
          primeiroNome: "Julia",
          ultimoNome: "Carvalho",
        },
        {
          id: "p2",
          primeiroNome: "Alice",
          ultimoNome: "Cavalcanti",
        },
        {
          id: "p3",
          primeiroNome: "Isaac",
          ultimoNome: "Lima",
        },
        {
          id: "p4",
          primeiroNome: "Pedro",
          ultimoNome: "Miguel",
        },
        {
          id: "p5",
          primeiroNome: "Raquel",
          ultimoNome: "Cardoso",
        },
      ],

      administradores: [
        {
          id: "adm1",
          primeiroNome: "Fernando",
          ultimoNome: "Mendes",
        },
        {
          id: "adm2",
          primeiroNome: "Gustavo",
          ultimoNome: "Henrique",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
