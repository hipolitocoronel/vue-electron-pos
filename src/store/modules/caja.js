import cajaServices from '@/services/caja';

export const caja = {
  namespaced: true,
  state: () => ({
    cajaActual: null, // id -- movimientos []
    cajasAnteriores: [],
    saldoInicial: null,

    dialogAbrir: false,
    dialogCerrar: false,
    dialogAgregar: false,
  }),
  mutations: {
    setCajaActual(state, cajaActual) {
      state.cajaActual = cajaActual;
    },
    setSaldoInicial(state, saldoInicial) {
      state.saldoInicial = saldoInicial;
    },

    setDialogAbrir(state, dialog) {
      state.dialogAbrir = dialog;
    },
    setDialogCerrar(state, dialog) {
      state.dialogCerrar = dialog;
    },
    setDialogAgregar(state, dialog) {
      state.dialogAgregar = dialog;
    },
  },
  actions: {
    async getCajaActualData({ commit }) {
      const cajaActual = await cajaServices.cajaActual();
      const movimientos = await cajaServices.movimientos();

      const caja = {
        cajaActual,
        movimientos,
      };

      commit('setCajaActual', caja);
    },
    setSaldoInicial({ commit }, saldoInicial) {
      commit('setSaldoInicial', saldoInicial);
    },

    setDialogCerrar({ commit }, dialog) {
      commit('setDialogCerrar', dialog);
    },
    setDialogAbrir({ commit }, dialog) {
      commit('setDialogAbrir', dialog);
    },
    setDialogAgregar({ commit }, dialog) {
      commit('setDialogAgregar', dialog);
    },
  },
  getters: {
    cajaActual: state => state.cajaActual,
    dialogAbrir: state => state.dialogAbrir,
    dialogCerrar: state => state.dialogCerrar,
    dialogAgregar: state => state.dialogAgregar,
  },
};
