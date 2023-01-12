<template>
    <v-dialog
        transition="dialog-top-transition"
        max-width="500"
        v-model="dialogCerrar"
    >
        <v-card>
            <v-toolbar color="primary" dark
                ><v-icon class="mr-2">mdi-cash-register</v-icon> Cierre de
                caja</v-toolbar
            >
            <div class="py-4 px-5">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th class="text-left">Medio de pago</th>
                                <th class="text-left">Saldo Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Saldo inicial</td>
                                <td>$2.000,00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Efectivo</td>
                                <td>$4.000,00</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <div class="mt-5">
                    <v-textarea
                        name="input-7-1"
                        color="black"
                        rows="3"
                        filled
                        label="Observaciones"
                        auto-grow
                    ></v-textarea>
                </div>
            </div>
            <v-card-actions class="justify-end">
                <v-btn text @click="setDialogCerrar(false)">Cancelar</v-btn>
                <v-btn
                    @click="setDialogCerrar(false)"
                    color="secondary darken-2"
                    >Cerrar caja</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "CerrarCaja",
    data() {
        return {};
    },
    computed: {
        ...mapGetters("caja", ["dialogCerrar"]),
    },
    methods: {
        ...mapActions("caja", ["setDialogCerrar"]),
    },
};
</script>
