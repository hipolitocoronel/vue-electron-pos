import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Usuarios from "../views/Usuarios.vue";
import Productos from "../views/Productos.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
