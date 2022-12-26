import Vue from "vue";
import Vuex from "vuex";
import { users } from "./modules/users";
import { productos } from "./modules/productos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: { username: "admin" },
  },
  getters: {
    userLogged: (state) => state.userLogged,
  },
  mutations: {
    setUserLogged(state, user) {
      state.userLogged = user;
    },
  },
  actions: {
    setUserLogged({ commit }, user) {
      commit("setUserLogged", user);
    },
  },
  modules: {
    users,
    productos,
  },
  strict: true,
});
