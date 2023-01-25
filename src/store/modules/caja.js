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
    agregarMovimiento(state, movimiento) {
      state.cajaActual.movimientos.unshift(movimiento);
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
      if (cajaActual.fechaCierre) return commit('setCajaActual', null);

      const movimientos = await cajaServices.movimientos(cajaActual.id);

      const caja = {
        data: cajaActual,
        movimientos,
      };

      commit('setCajaActual', caja);
    },

    async setAgregarDinero({ commit }, { importe, observaciones, user }) {
      const data = {
        tipo: 'Ingreso de dinero',
        importeTotal: importe,
        caja: this.state.caja.cajaActual.data.id,
        observaciones,
        user,
      };

      const idMovimiento = await cajaServices.agregarDinero(data);
      const movimiento = await cajaServices.getMovimiento(idMovimiento);

      return movimiento;
    },

    async agregarMovimiento({ commit }, movimiento) {
      const cajaActual = this.state.caja.cajaActual.data;
      const saldoActual = cajaActual.saldoFinal;
      const saldoActualizado = saldoActual + movimiento.importeTotal;

      await cajaServices.actualizarSaldoCaja({
        ...cajaActual,
        saldoFinal: saldoActualizado,
      });

      commit('agregarMovimiento', movimiento);
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
