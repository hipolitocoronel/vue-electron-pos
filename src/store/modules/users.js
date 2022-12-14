export const users = {
  namespaced: true,
  state: () => ({
    dialog: false,
    editUser: false,
    users: [],

    //datos para el formulario
    id: "",
    username: "",
    name: "",
    password: "",
    state: false,
  }),
  mutations: {
    setDialog(state, dialog) {
      state.dialog = dialog;
    },
    setEditUser(state, editUser) {
      state.editUser = editUser;
    },
    setUsers(state, users) {
      state.users = users;
    },
    updateUser(state, user) {
      state.users = state.users.map((u) => (u.id === user.id ? user : u));
    },
    removeUser(state, user) {
      state.users = state.users.filter((u) => u.id !== user.id);
    },
    resetForm(state) {
      state.dialog = false;
      state.editUser = false;
      state.id = "";
      state.username = "";
      state.name = "";
      state.password = "";
      state.state = false;
    },

    //datos para el formulario
    setId(state, id) {
      state.id = id;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setName(state, name) {
      state.name = name;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setState(state, stat) {
      state.state = stat;
    },
  },
  actions: {
    setDialog({ commit }, dialog) {
      commit("setDialog", dialog);
    },
    setEditUser({ commit }, editUser) {
      commit("setEditUser", editUser);
    },
    setUsers({ commit }, users) {
      commit("setUsers", users);
    },
    updateUser({ commit }, user) {
      commit("updateUser", user);
    },
    removeUser({ commit }, user) {
      commit("removeUser", user);
    },
    resetForm({ commit }) {
      commit("resetForm");
    },

    //datos para el formulario
    setId({ commit }, id) {
      commit("setId", id);
    },
    setUsername({ commit }, username) {
      commit("setUsername", username);
    },
    setName({ commit }, name) {
      commit("setName", name);
    },
    setPassword({ commit }, password) {
      commit("setPassword", password);
    },
    setState({ commit }, state) {
      commit("setState", state);
    },
  },
  getters: {
    dialog: (state) => state.dialog,
    editUser: (state) => state.editUser,
    users: (state) => state.users,

    //datos formulario
    id: (state) => state.id,
    username: (state) => state.username,
    name: (state) => state.name,
    password: (state) => state.password,
    state: (state) => state.state,
  },
};
