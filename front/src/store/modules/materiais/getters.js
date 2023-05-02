export default {
  materiais(state) {
    return state.materiais;
  },
  temMateriais(state) {
    return state.materiais && state.materiais.length > 0;
  },

  alertas(state) {
    return state.alertas;
  },
  temAlertas(state) {
    return state.alertas && state.alertas.length > 0;
  },
};
