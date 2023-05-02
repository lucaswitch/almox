import { createStore } from "vuex";

import pessoasModule from "./modules/pessoas/index.js";
import materiaisModule from "./modules/materiais/index.js";
import agendaModule from "./modules/agenda/index.js";

const store = createStore({
  modules: {
    pessoas: pessoasModule,
    materiais: materiaisModule,
    agenda: agendaModule,
  },
});

export default store;
