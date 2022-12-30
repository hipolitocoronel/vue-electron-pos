<template>
  <div>
    <v-tabs color="black" class="mt-2" background-color="transparent">
      <v-tab class="text-capitalize">Productos</v-tab>
      <v-tab class="text-capitalize">Inventario</v-tab>
      <v-tab class="text-capitalize">Proveedores</v-tab>

      <v-tab-item class="grey lighten-5">
        <v-row class="mt-2" align="center" no-gutters>
          <v-col cols="10">
            <v-text-field
              v-model="search"
              filled
              rounded
              label="Buscar producto por código, descripción o categoría"
              prepend-inner-icon="mdi-magnify"
              dense
              hide-details
              color="secondary"
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="d-flex justify-end">
            <v-btn
              color="secondary darken-2"
              class="btn-producto ma-4"
              small
              @click="setDialog(true)"
              >Nuevo producto</v-btn
            >
          </v-col>
        </v-row>
        <TablaProductos />
        <Formulario />
      </v-tab-item>
      <v-tab-item class="grey lighten-5">hola2</v-tab-item>
      <v-tab-item class="grey lighten-5">hola3</v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Formulario from "@/components/productos/Formulario.vue";
import TablaProductos from "@/components/productos/TablaProductos.vue";
import { mapActions } from "vuex";

export default {
  name: "Productos",
  components: { TablaProductos, Formulario },
  data: () => ({}),
  computed: {
    search: {
      get() {
        return this.$store.getters["productos/search"];
      },
      set(newSeach) {
        this.$store.dispatch("productos/setSearch", newSeach);
      },
    },
  },
  methods: {
    ...mapActions("productos", ["setDialog"]),
  },
};
</script>

<style scoped></style>
