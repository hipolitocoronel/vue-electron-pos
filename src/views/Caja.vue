<template>
    <div>
        <v-tabs color="black" class="mt-2" background-color="transparent">
            <v-tab class="text-capitalize">Caja actual</v-tab>
            <v-tab class="text-capitalize">Cajas anteriores</v-tab>
            <v-tab-item class="grey lighten-5">
                <v-row no-gutters class="my-3">
                    <v-col>
                        <v-btn color="secondary darken-2 mr-2" small>Abrir Caja</v-btn>
                        <v-btn color="black" outlined small>Cerrar Caja</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="black" icon>x</v-btn>
                    </v-col>
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
            <v-tab-item> cajas anteriores </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
export default {
    name: "Caja",
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
