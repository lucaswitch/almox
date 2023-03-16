import { createRouter, createWebHistory } from "vue-router";

//import PaginaInicial from "./pages/PaginaInicial.vue";
//import PaginaAgenda from "./pages/PaginaAgenda.vue";
//import PaginaAgendaReservar from "./pages/PaginaAgendaReservar.vue";
//import PaginaMateriais from "./pages/PaginaMateriais.vue";
//import PaginaMateriaisDetalhes from "./pages/PaginaMateriaisDetalhes.vue";
//import PaginaMateriaisDevolver from "./pages/PaginaMateriaisDevolver.vue";
//import PaginaMateriaisRegistrar from "./pages/PaginaMateriaisRegistrar.vue";
//import PaginaRelatorio from "./pages/PaginaRelatorio.vue";
//import PaginaProfessores from "./pages/PaginaProfessores.vue";
//import PaginaAdministradores from "./pages/PaginaAdministradores.vue";
//import PaginaLogin from "./pages/PaginaLogin.vue";
//import PaginaSingin from "./pages/PaginaSignin.vue";
//import NotFound from "./pages/NotFound.vue";

const PaginaInicial = () => import("./pages/PaginaInicial.vue");
const PaginaAgenda = () => import("./pages/PaginaAgenda.vue");
const PaginaAgendaReservar = () => import("./pages/PaginaAgendaReservar.vue");
const PaginaMateriais = () => import("./pages/PaginaMateriais.vue");
const PaginaMateriaisDetalhes = () =>
  import("./pages/PaginaMateriaisDetalhes.vue");
const PaginaMateriaisDevolver = () =>
  import("./pages/PaginaMateriaisDevolver.vue");
const PaginaMateriaisRegistrar = () =>
  import("./pages/PaginaMateriaisRegistrar.vue");
const PaginaRelatorio = () => import("./pages/PaginaRelatorio.vue");
const PaginaProfessores = () => import("./pages/PaginaProfessores.vue");
const PaginaAdministradores = () => import("./pages/PaginaAdministradores.vue");
const PaginaLogin = () => import("./pages/PaginaLogin.vue");
const PaginaSignin = () => import("./pages/PaginaSignin.vue");
const NotFound = () => import("./pages/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/inicio" },
    { path: "/inicio", component: PaginaInicial },
    { path: "/agenda", component: PaginaAgenda },
    { path: "/agenda/reservar", component: PaginaAgendaReservar },
    { path: "/materiais", component: PaginaMateriais, props: true },
    { path: "/materiais/:id", component: PaginaMateriaisDetalhes, props: true },
    { path: "/materiais/devolver", component: PaginaMateriaisDevolver },
    { path: "/materiais/registrar", component: PaginaMateriaisRegistrar },
    { path: "/relatorio", component: PaginaRelatorio },
    { path: "/professores", component: PaginaProfessores },
    { path: "/administradores", component: PaginaAdministradores },
    { path: "/login", component: PaginaLogin },
    { path: "/signin", component: PaginaSignin },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
