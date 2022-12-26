<template>
  <v-app id="inspire">
    <div v-if="userLogged" style="height: 100%">
      <!--SIDEBAR-->
      <v-navigation-drawer v-model="drawer" app color="blue" dark>
        <v-list class="mt-5">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logout"> Salir </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <!--NAVBAR-->
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Punto de venta</v-toolbar-title>
        <v-spacer></v-spacer>
        <p style="margin-bottom: 0">
          Hola,
          <span class="font-weight-bold">{{ userLogged.username }}</span>
          👋 
        </p>
      </v-app-bar>

      <!--MAIN CONTENT-->
      <v-main style="height: 100%" class="grey lighten-5">
        <router-view class="mx-5" />

        <v-card
          width="100%"
          style="position: absolute; bottom: 0"
          class="py-2 px-2 d-flex"
          elevation="10"
        >
          <p style="margin-bottom: 0">
            Desarrollado por
            <span class="font-weight-bold"> Hipolito Coronel</span>
          </p>
          <v-spacer></v-spacer>
          <p style="margin-bottom: 0">
            Te quedan
            <span class="font-weight-bold red--text"> 7 </span>
            días de prueba
          </p>
        </v-card>
      </v-main>
    </div>

    <Login />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Login from "./views/Login.vue";

export default {
  name: "App",
  components: { Login },
  data: () => ({
    drawer: null,
    items: [
      { title: "Inicio", icon: "mdi-home", to: "/" },
      { title: "Ventas", icon: "mdi-cart" },
      { title: "Compras", icon: "mdi-shopping" },
      { title: "Productos", icon: "mdi-archive", to: "/productos" },
      { title: "Usuarios", icon: "mdi-account", to: "/usuarios" },
      { title: "Reportes", icon: "mdi-book-open" },
      { title: "Ajustes", icon: "mdi-sort-variant" },
    ],
  }),
  computed: {
    ...mapGetters(["userLogged"]),
  },
  methods: {
    ...mapActions(["setUserLogged"]),
    logout() {
      this.setUserLogged(null);
    },
  },
};
</script>

<style scoped></style>
