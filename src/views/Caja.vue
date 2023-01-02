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
                        disabled
                        >Abrir Caja</v-btn
                    >
                    <v-btn color="black" class="mr-2" outlined small
                        >Cerrar Caja</v-btn
                    >
                    <v-btn
                        color="success"
                        text
                        class="text-capitalize mr-2"
                        small
                        ><v-icon class="mr-1">mdi-cash-plus</v-icon>Agregar
                        dinero</v-btn
                    >
                    <v-btn color="error" text class="text-capitalize" small>
                        <v-icon class="mr-1">mdi-cash-minus</v-icon> Retirar
                        dinero</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn color="secondary" icon
                        ><v-icon>mdi-cog</v-icon></v-btn
                    >
                </v-row>
                <v-row no-gutters>
                    <v-col>
                        <v-data-table
                            :headers="headers"
                            class="grey lighten-5"
                            hide-default-footer
                            no-data-text="Sin datos disponibles para mostrar"
                        >
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-tab-item>
            <v-tab-item>
                <AbrirCaja />
                <CerrarCaja />
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import AbrirCaja from "@/components/caja/AbrirCaja.vue";
import CerrarCaja from "@/components/caja/CerrarCaja.vue";

export default {
    name: "Caja",
    components: {
        AbrirCaja,
        CerrarCaja,
    },
    data() {
        return {
            headers: [
                {
                    text: "ID",
                    align: "start",
                    sortable: true,
                    value: "id",
                },
                {
                    text: "Fecha",
                    align: "start",
                    sortable: true,
                    value: "name",
                },
                {
                    text: "Hora",
                    align: "start",
                    sortable: true,
                    value: "email",
                },
                {
                    text: "Descripción",
                    align: "start",
                    sortable: true,
                    value: "phone",
                },
                {
                    text: "Importe total",
                    align: "start",
                    sortable: true,
                    value: "city",
                },
                {
                    text: "Medio de pago",
                    align: "start",
                    sortable: true,
                    value: "profession",
                },
                {
                    text: "Vendedor",
                    align: "start",
                    sortable: true,
                    value: "profession",
                },
            ],
        };
    },
};
</script>
