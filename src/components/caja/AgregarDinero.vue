<template>
    <v-dialog
        transition="dialog-top-transition"
        max-width="450"
        v-model="dialogAgregar"
    >
        <v-card>
            <v-toolbar color="primary" dark
                ><v-icon class="mr-2">mdi-cash-plus</v-icon> Agregar
                dinero</v-toolbar
            >
            <div class="py-4 px-5">
                <v-text-field
                    v-model="monto"
                    class="mt-3"
                    type="number"
                    min="0"
                    color="secondary"
                    prepend-inner-icon="mdi-cash"
                    filled
                    label="Monto"
                ></v-text-field>

                <v-textarea
                    v-model="observaciones"
                    label="Observaciones"
                    rows="2"
                    color="secondary"
                    filled
                ></v-textarea>
            </div>
            <v-card-actions class="justify-end">
                <v-btn text @click="setDialogAgregar(false)">Cancelar</v-btn>
                <v-btn
                    @click="agregarDinero()"
                    color="secondary darken-2"
                    >Agregar dinero</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
    name: "AgregarDinero",
    data() {
        return {
            monto: "",
            observaciones: "",
        };
    },
    computed: {
        ...mapGetters("caja", ["dialogAgregar"]),
    },
    methods: {
        ...mapActions("caja", ["setDialogAgregar"]),
        agregarDinero() {
            const data = {
                monto: this.monto,
                observaciones: this.observaciones,
                fecha: moment()._d,
            };

            console.log(data);
        },
    },
};
</script>
