<template>
  <div>
    <!--ENCABEZADO DE USUARIOS-->
    <v-row class="mt-2">
      <v-col><v-subheader>Inicio / Usuarios</v-subheader></v-col>
      <v-col class="d-flex justify-end">
        <v-btn
          color="secondary darken-1"
          class="text-end"
          small
          @click="setDialog(true)"
          >Nuevo usuario</v-btn
        >
      </v-col>
    </v-row>

    <!--TABLA DE USUARIOS-->
    <TablaUsuarios />
    <Formulario />
  </div>
</template>

<script>
import Formulario from "@/components/usuarios/Formulario.vue";
import TablaUsuarios from "@/components/usuarios/TablaUsuarios.vue";
import userService from "@/services/user";
import { mapActions } from "vuex";
export default {
  name: "Usuarios",
  components: { TablaUsuarios, Formulario },

  data: () => ({}),
  mounted() {
    userService.getUsers().then((users) => {
      this.setUsers(users.items);
    });
  },
  methods: {
    ...mapActions("users", ["setUsers", "setDialog"]),
  },
};
</script>

<style scoped></style>
