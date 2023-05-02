export default {
  laboratorios(state) {
    return state.laboratorios;
  },
  temLaboratorios(state) {
    return state.laboratorios && state.laboratorios.length > 0;
  },

  agora(state) {
    return state.agora;
  },
  temAgora(state) {
    return state.agora && state.agora.length > 0;
  },

  reservas(state) {
    return state.reservas;
  },
  temReservas(state) {
    return state.reservas && state.reservas.length > 0;
  },
};
