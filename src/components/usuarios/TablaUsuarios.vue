<template>
  <v-row>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items.sync="users"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        item-key="id"
        v-model="selected"
        checkbox-color="success"
        show-select
        class="grey lighten-5 row-pointer"
        @click:row="rowClick"
        @page-count="pageCount = $event"
        no-data-text="Sin usuarios registrados"
      >
        <template v-slot:item.id="{ item }">
          <v-chip>
            {{ item.id }}
          </v-chip>
        </template>
        <template v-slot:item.state="{ item }">
          <v-chip :color="item.state ? 'success' : 'red'" outlined>
            {{ item.state ? "Activo" : "Inactivo" }}
          </v-chip>
        </template>
      </v-data-table>
    </v-col>

    <v-col
      justify="center"
      v-if="selected.length > 0"
      transition="slide-y-reverse-transition"
    >
      <div class="delete-container rounded-pill py-3">
        <div>
          Seleccionaste
          <span class="font-weight-bold">{{ selected.length }}</span>
          {{ selected.length > 1 ? "usuarios" : "usuario" }}
          <v-btn outlined class="ml-3" small @click="selected = []"
            >Limpiar</v-btn
          >
        </div>
        <v-btn text color="error" small @click="eliminarUsuario"
          >Eliminar {{ selected.length > 1 ? "usuarios" : "usuario" }}</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import userService from "@/services/user";
export default {
  name: "TablaUsuarios",
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    selected: [],
    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre de usuario", value: "username" },
      { text: "Nombre Completo", value: "name" },
      { text: "Estado", value: "state" },
    ],
  }),
  computed: {
    ...mapGetters(["userLogged"]),
    ...mapGetters("users", ["users"]),
  },
  methods: {
    ...mapActions("users", [
      "setId",
      "setUsername",
      "setName",
      "setPassword",
      "setState",
      "setDialog",
      "updateUser",
      "removeUser",
      "setEditUser",
    ]),
    cargarDatosUsuario(user) {
      this.setId(user.id);
      this.setUsername(user.username);
      this.setName(user.name);
      this.setPassword(user.password);
      this.setState(user.state);

      this.setEditUser(true);
      this.setDialog(true);
    },
    eliminarUsuario() {
      this.selected.forEach((item) => {
        userService
          .removeUser(item.id)
          .then(() => {
            this.removeUser(item);
          })
          .catch((error) => console.error(error));
      });

      this.selected = [];
    },

    rowClick(item) {
      const { id, username, name, state } = item;
      this.setDialog(true);
      this.setEditUser(true);
      this.setId(id);
      this.setUsername(username);
      this.setName(name);
      this.setState(state);
    },
  },
};
</script>

<style scoped>
.delete-container {
  background: #fff;
  border: 1px solid #ccc;
  max-width: 530px;
  margin: auto;

  display: flex;
  justify-content: space-between;

  animation: animacion 0.5s;
}

@keyframes animacion {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0);
  }
}

.v-btn {
  text-transform: capitalize;
}

.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>
