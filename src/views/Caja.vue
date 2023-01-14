<template>
  <div>
    <v-tabs color="black" class="mt-2" background-color="transparent">
      <v-tab class="text-capitalize">Caja actual</v-tab>
      <v-tab class="text-capitalize">Cajas anteriores</v-tab>
      <v-tab-item class="grey lighten-5">
        <v-row no-gutters class="my-3 align-center">
          <v-btn
            color="secondary darken-2"
            class="mr-2"
            small
            @click="setDialogAbrir(true)"
            >Abrir Caja</v-btn
          >
          <v-btn
            color="black"
            class="mr-2"
            outlined
            small
            @click="setDialogCerrar(true)"
            >Cerrar Caja</v-btn
          >
          <v-btn
            color="success"
            text
            class="text-capitalize mr-2"
            small
            @click="setDialogAgregar(true)"
            ><v-icon class="mr-1">mdi-cash-plus</v-icon>Agregar dinero</v-btn
          >
          <v-btn color="error" text class="text-capitalize" small>
            <v-icon class="mr-1">mdi-cash-minus</v-icon> Retirar dinero</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="secondary" icon><v-icon>mdi-cog</v-icon></v-btn>
        </v-row>

        <v-row no-gutters>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="cajaActual.movimientos"
              class="grey lighten-5"
              hide-default-footer
              no-data-text="Sin datos disponibles para mostrar">
              <template v-slot:[`item.id`]="{ item }">
                <v-chip>
                  {{ item.id }}
                </v-chip>
              </template>

              <template v-slot:[`item.created`]="{ item }">
                {{ moment(item.created).format('l') }}
              </template>

              <template v-slot:[`item.updated`]="{ item }">
                {{ moment(item.updated).format('HH:mm:ss') }}
              </template>

              <template v-slot:[`item.importeTotal`]="{ item }">
                {{ toPesos(item.importeTotal) }}
              </template>

              <template v-slot:[`item.medioPago`]="{ item }">
                {{ item.medioPago ? item.medioPago : '-' }}
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item> </v-tab-item>
    </v-tabs>

    <AbrirCaja />
    <CerrarCaja />
    <AgregarDinero />
  </div>
</template>

<script>
import AbrirCaja from '@/components/caja/AbrirCaja.vue';
import AgregarDinero from '@/components/caja/AgregarDinero.vue';
import CerrarCaja from '@/components/caja/CerrarCaja.vue';
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';
import { toPesos } from '@/helpers';

export default {
  name: 'Caja',
  components: {
    AbrirCaja,
    CerrarCaja,
    AgregarDinero,
  },
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Fecha',
          align: 'start',
          sortable: true,
          value: 'created',
        },
        {
          text: 'Hora',
          align: 'start',
          sortable: true,
          value: 'updated',
        },
        {
          text: 'Descripción',
          align: 'start',
          sortable: true,
          value: 'tipo',
        },
        {
          text: 'Importe total',
          align: 'start',
          sortable: true,
          value: 'importeTotal',
        },
        {
          text: 'Medio de pago',
          align: 'start',
          sortable: true,
          value: 'medioPago',
        },
        {
          text: 'Usuario',
          align: 'start',
          sortable: true,
          value: 'expand.user.name',
        },
      ],

      moment,
      toPesos,
    };
  },
  computed: {
    ...mapGetters('caja', ['cajaActual']),
  },
  async created() {
    await this.getCajaActualData();
  },
  methods: {
    ...mapActions('caja', [
      'getCajaActualData',
      'setDialogAbrir',
      'setDialogCerrar',
      'setDialogAgregar',
    ]),
  },
};
</script>
