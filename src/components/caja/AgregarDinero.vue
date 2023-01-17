<template>
  <v-dialog
    transition="dialog-top-transition"
    persistent
    max-width="450"
    v-model="dialogAgregar">
    <v-card>
      <v-toolbar color="primary" dark
        ><v-icon class="mr-2">mdi-cash-plus</v-icon> Agregar dinero</v-toolbar
      >
      <div class="py-4 px-5">
        <v-text-field
          v-model="importe"
          class="mt-3"
          type="number"
          min="0"
          color="secondary"
          prepend-inner-icon="mdi-cash"
          filled
          label="Monto"></v-text-field>

        <v-textarea
          v-model="observaciones"
          label="Observaciones"
          rows="2"
          color="secondary"
          filled></v-textarea>
      </div>
      <v-card-actions class="justify-end">
        <v-btn text @click="setDialogAgregar(false)">Cancelar</v-btn>
        <v-btn @click="agregarDinero()" color="secondary darken-2"
          >Agregar dinero</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AgregarDinero',
  data() {
    return {
      importe: '',
      observaciones: '',
    };
  },
  computed: {
    ...mapGetters(['userLogged']),
    ...mapGetters('caja', ['dialogAgregar']),
  },
  methods: {
    ...mapActions('caja', [
      'setDialogAgregar',
      'setAgregarDinero',
      'agregarMovimiento',
    ]),
    async agregarDinero() {
      const data = {
        importe: this.importe,
        observaciones: this.observaciones,
        user: this.userLogged.id,
      };

      const movimiento = await this.setAgregarDinero(data);
      this.agregarMovimiento(movimiento);
      this.$toast.success('Dinero agregado correctamente', {
        position: 'top-right',
      });
      this.setDialogAgregar(false);

      // reset data
      this.importe = '';
      this.observaciones = '';
    },
  },
};
</script>
