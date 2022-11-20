import { createRouter, createWebHistory } from "vue-router";

import PaginaInicial from "./pages/PaginaInicial.vue";
import PaginaAgenda from "./pages/PaginaAgenda.vue";
import PaginaAgendaReservar from "./pages/PaginaAgendaReservar.vue";
import PaginaMateriais from "./pages/PaginaMateriais.vue";
import PaginaMateriaisDevolver from "./pages/PaginaMateriaisDevolver.vue";
import PaginaMateriaisRegistrar from "./pages/PaginaMateriaisRegistrar.vue";
import PaginaRelatorio from "./pages/PaginaRelatorio.vue";
import PaginaProfessores from "./pages/PaginaProfessores.vue";
import PaginaAdministradores from "./pages/PaginaAdministradores.vue";
import PaginaLogin from "./pages/PaginaLogin.vue";
import PaginaSingin from "./pages/PaginaSignin.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/inicio" },
    { path: "/inicio", component: PaginaInicial },
    { path: "/agenda", component: PaginaAgenda },
    { path: "/agenda/reservar", component: PaginaAgendaReservar },
    { path: "/materiais", component: PaginaMateriais },
    { path: "/materiais/devolver", component: PaginaMateriaisDevolver },
    { path: "/materiais/registrar", component: PaginaMateriaisRegistrar },
    { path: "/relatorio", component: PaginaRelatorio },
    { path: "/professores", component: PaginaProfessores },
    { path: "/administradores", component: PaginaAdministradores },
    { path: "/login", component: PaginaLogin },
    { path: "/signin", component: PaginaSingin },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
