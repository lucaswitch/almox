export default {
  professores(state) {
    return state.professores;
  },
  temProfessores(state) {
    return state.professores && state.professores.length > 0;
  },

  administradores(state) {
    return state.administradores;
  },
  temAdministradores(state) {
    return state.administradores && state.administradores.length > 0;
  },
};
