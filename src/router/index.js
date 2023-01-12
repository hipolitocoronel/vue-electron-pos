import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Usuarios from "../views/Usuarios.vue";
import Productos from "../views/Productos.vue";
import Caja from "../views/Caja.vue";
import Ventas from "../views/Ventas.vue";
import Ajustes from "../views/Ajustes.vue";
import Reportes from "../views/Reportes.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/usuarios",
        name: "usuarios",
        component: Usuarios,
    },
    {
        path: "/productos",
        name: "productos",
        component: Productos,
    },
    {
        path: "/caja",
        name: "caja",
        component: Caja,
    },
    {
        path: "/reportes",
        name: "reportes",
        component: Reportes,
    },
    {
        path: "/ventas",
        name: "ventas",
        component: Ventas,
    },
    {
        path: "/ajustes",
        name: "ajustes",
        component: Ajustes,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
