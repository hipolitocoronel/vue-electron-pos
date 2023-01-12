export const caja = {
    namespaced: true,
    state: () => ({
        cajaActual: [],
        cajasAnteriores: [],
        saldoInicial: null,

        dialogAbrir: false,
        dialogCerrar: false,
        dialogAgregar: false,
    }),
    mutations: {
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
        setSaldoInicial({ commit }, saldoInicial) {
            commit("setSaldoInicial", saldoInicial);
        },

        setDialogCerrar({ commit }, dialog) {
            commit("setDialogCerrar", dialog);
        },
        setDialogAbrir({ commit }, dialog) {
            commit("setDialogAbrir", dialog);
        },
        setDialogAgregar({ commit }, dialog) {
            commit("setDialogAgregar", dialog);
        },
    },
    getters: {
        dialogAbrir: (state) => state.dialogAbrir,
        dialogCerrar: (state) => state.dialogCerrar,
        dialogAgregar: (state) => state.dialogAgregar,
    },
};
