<template>
  <v-row no-gutters style="height: 95%" class="grey lighten-4">
    <v-col cols="9" style="height: 100%">
      <div class="ma-5 d-flex align-center">
        <v-btn icon class="grey darken-3 mr-2" @click="$router.push('inicio')"
          ><v-icon class="white--text">mdi-arrow-left</v-icon></v-btn
        >
        <v-autocomplete
          filled
          rounded
          prepend-inner-icon="mdi-magnify"
          no-data-text="Sin productos"
          color="secondary"
          dense
          hide-details
          label="Buscar producto"></v-autocomplete>
      </div>

      <v-tabs color="black" background-color="transparent" class="px-10">
        <v-tab class="text-capitalize">Populares</v-tab>
        <v-tab class="text-capitalize">Lacteos</v-tab>
        <v-tab class="text-capitalize">Fiambres</v-tab>
        <v-tab-item class="grey lighten-4">
          <div class="productos-container">
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Gaseosas</p>
                <p class="mb-0 text-h6">Coca cola 15.lts</p>
                <p class="mb-0">$350.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">0</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Lacteos</p>
                <p class="mb-0 text-h6">Leche entera 350ml</p>
                <p class="mb-0">$150.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">0</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Lacteos</p>
                <p class="mb-0 text-h6">Yogurt sancor vainilla</p>
                <p class="mb-0">$290.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">2</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Gaseosas</p>
                <p class="mb-0 text-h6">Coca cola 15.lts</p>
                <p class="mb-0">$350.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">0</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Gaseosas</p>
                <p class="mb-0 text-h6">Coca cola 15.lts</p>
                <p class="mb-0">$350.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">0</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Gaseosas</p>
                <p class="mb-0 text-h6">Coca cola 15.lts</p>
                <p class="mb-0">$350.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">0</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Gaseosas</p>
                <p class="mb-0 text-h6">Coca cola 15.lts</p>
                <p class="mb-0">$350.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">0</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
            <div class="producto-item white">
              <div>
                <p class="grey--text text-body-2">Gaseosas</p>
                <p class="mb-0 text-h6">Coca cola 15.lts</p>
                <p class="mb-0">$350.00</p>
              </div>

              <div class="acciones">
                <v-btn icon outlined small><v-icon>mdi-minus</v-icon></v-btn>
                <span class="cantidad text-h5">0</span>
                <v-btn icon outlined small><v-icon>mdi-plus</v-icon></v-btn>
              </div>
            </div>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-col>

    <v-col
      cols="3"
      class="white rounded py-4 pl-5 d-flex flex-column"
      style="height: 100%">
      <div class="d-flex justify-space-between align-center">
        <p class="text-subtitle-1 mb-0 font-weight-bold">Nueva venta</p>
        <p class="mb-0 green--text">{{ moment().format('lll') }} hs</p>
      </div>
      <div class="carrito-container mt-8">
        <div class="carrito-item grey lighten-4 py-3 px-5">
          <div class="informacion">
            <p class="mb-0 font-weight-bold">Coca cola 1.5lts</p>
            <span class="text-body-2">$350.00</span>
          </div>
          <div class="acciones">
            <div class="d-flex align-center" style="gap: 10px">
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
              <span class="text-h6">3</span>
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
            <p
              text
              small
              class="grey--text text--darken-3 text-caption text-end mb-0">
              Remover
            </p>
          </div>
        </div>
        <div class="carrito-item grey lighten-4 py-3 px-5">
          <div class="informacion">
            <p class="mb-0 font-weight-bold">Coca cola 1.5lts</p>
            <span class="text-body-2">$350.00</span>
          </div>
          <div class="acciones">
            <div class="d-flex align-center" style="gap: 10px">
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
              <span class="text-h6">3</span>
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
            <p
              text
              small
              class="grey--text text--darken-3 text-caption text-end mb-0">
              Remover
            </p>
          </div>
        </div>
        <div class="carrito-item grey lighten-4 py-3 px-5">
          <div class="informacion">
            <p class="mb-0 font-weight-bold">Coca cola 1.5lts</p>
            <span class="text-body-2">$350.00</span>
          </div>
          <div class="acciones">
            <div class="d-flex align-center" style="gap: 10px">
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
              <span class="text-h6">3</span>
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
            <p
              text
              small
              class="grey--text text--darken-3 text-caption text-end mb-0">
              Remover
            </p>
          </div>
        </div>
        <div class="carrito-item grey lighten-4 py-3 px-5">
          <div class="informacion">
            <p class="mb-0 font-weight-bold">Coca cola 1.5lts</p>
            <span class="text-body-2">$350.00</span>
          </div>
          <div class="acciones">
            <div class="d-flex align-center" style="gap: 10px">
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
              <span class="text-h6">3</span>
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
            <p
              text
              small
              class="grey--text text--darken-3 text-caption text-end mb-0">
              Remover
            </p>
          </div>
        </div>
        <div class="carrito-item grey lighten-4 py-3 px-5">
          <div class="informacion">
            <p class="mb-0 font-weight-bold">Coca cola 1.5lts</p>
            <span class="text-body-2">$350.00</span>
          </div>
          <div class="acciones">
            <div class="d-flex align-center" style="gap: 10px">
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
              <span class="text-h6">3</span>
              <v-btn icon x-small class="amber lighten-1 white--text"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
            <p
              text
              small
              class="grey--text text--darken-3 text-caption text-end mb-0">
              Remover
            </p>
          </div>
        </div>
      </div>

      <div class="total-container mt-6">
        <div class="d-flex">
          <span class="text-body-2">Subtotal:</span>
          <v-spacer></v-spacer>
          <span>$960.00</span>
        </div>
        <div class="d-flex">
          <span class="text-body-2">Descuento:</span>
          <v-spacer></v-spacer>
          <span>$0.00</span>
        </div>

        <div class="d-flex total">
          <span class="font-weight-bold text-h6">Total:</span>
          <v-spacer></v-spacer>
          <span class="font-weight-bold text-h5">$960.00</span>
        </div>
        <p class="text-body-2 mb-1 text-end grey--text text--darken-2">Vaciar carrito</p>
      </div>

      <div>
        <div class="my-4">
          <p class="text-body-2 mb-0 text-end blue--text">Aplicar descuento</p>
          <p class="mb-1 font-weight-bold">Medio de pago</p>
          <div class="medio-pago-container py-1">
            <div class="medio-pago-item activo">
              <v-icon class="activo"> mdi-cash </v-icon>
              <span class="text-body-2">Efectivo</span>
            </div>
            <div class="medio-pago-item">
              <img src="@/assets/mercadopago.jpg" width="25px" />
              <span class="text-body-2">M. Pago</span>
            </div>
            <div class="medio-pago-item">
              <v-icon> mdi-credit-card </v-icon>
              Crédito
            </div>
            <div class="medio-pago-item">
              <v-icon> mdi-card-text </v-icon>
              Debito
            </div>
          </div>
        </div>
        <v-btn class="blue white--text rounded-pill" block>Vender</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es'); // aca ya esta en es
export default {
  data() {
    return { moment };
  },
};
</script>

<style scoped>
.productos-container {
  margin-top: 20px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.producto-item {
  min-width: 200px;
  min-height: 200px;
  flex: 1;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}

.producto-item > .acciones {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.carrito-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
}

.carrito-item {
  min-height: 75px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
}

.total {
  border-top: 3px dashed #ddd;
  margin-top: 10px;
  padding: 3px 0;
  align-items: center;
}

.medio-pago-container {
  overflow-x: auto;
  scrollbar-width: none;
  display: flex;
  gap: 10px;
}
.medio-pago-item {
  border: 1px solid #ddd;
  padding: 5px;
  min-width: 100px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.activo {
  border-color: #2196f3 !important;
  color: #2196f3 !important;
}
</style>
