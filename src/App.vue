<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="blue" dark>
      <v-list class="mt-5">
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
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
          <v-btn block>
            Salir
          </v-btn>
        </div>
      </template>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Punto de venta</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

require('./server')

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    items: [
      { title: 'Inicio', icon: 'mdi-home', to: '/' },
      { title: 'Ventas', icon: 'mdi-cart' },
      { title: 'Compras', icon: 'mdi-shopping' },
      { title: 'Inventario', icon: 'mdi-archive' },
      { title: 'Usuarios', icon: 'mdi-account' },
      { title: 'Reportes', icon: 'mdi-book-open' },
      { title: 'Ajustes', icon: 'mdi-sort-variant' },
    ],
  }),
};
</script>
