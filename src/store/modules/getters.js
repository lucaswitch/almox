export default {
  // Retorna lista de materiais
  materiais(state) {
    return state.materiais;
  },
  // Verifica se há existência de materiais
  temMateriais(state) {
    return state.materiais && state.materiais.length > 0;
  },
  // Retorna lista de alertas
  alertas(state) {
    return state.alertas;
  },
  // Verifica se há existência de alertas
  temAlertas(state) {
    return state.alertas && state.alertas.length > 0;
  },
  // Retorna lista de laboratórios
  laboratorios(state) {
    return state.laboratorios;
  },
  // Verifica se há existência de laboratórios
  temLaboratorios(state) {
    return state.laboratorios && state.laboratorios.length > 0;
  },
  // Retorna lista de laboratórios sendo utilizados agora
  laboratoriosAgora(state) {
    return state.laboratorioAgora;
  },
  // Verifica se há existência de laboratório sendo utilizado agora
  temLaboratoriosAgora(state) {
    return state.laboratorioAgora && state.laboratorioAgora.length > 0;
  },
  // Retorna lista de professores
  professores(state) {
    return state.professores;
  },
  // Verifica se há professores
  temProfessores(state) {
    return state.professores && state.professores.length > 0;
  },
  // Retorna lista de administradores
  administradores(state) {
    return state.administradores;
  },
  // Verifica se há administradores
  temAdministradores(state) {
    return state.administradores && state.administradores.length > 0;
  },
};
