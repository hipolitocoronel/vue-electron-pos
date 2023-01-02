<template>
    <v-dialog transition="dialog-top-transition" max-width="450">
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark
                    ><v-icon class="mr-2">mdi-cash-register</v-icon> Apertura de
                    caja</v-toolbar
                >
                <div class="py-4 px-5">
                    <v-text-field
                        class="mt-3"
                        type="number"
                        min="0"
                        color="secondary"
                        prepend-inner-icon="mdi-cash"
                        filled
                        label="Saldo inicial"
                    ></v-text-field>
                </div>
                <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Cancelar</v-btn>
                    <v-btn
                        @click="dialog.value = false"
                        color="secondary darken-2"
                        >Abrir caja</v-btn
                    >
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {
    name: "AbrirCaja",
    data() {
        return {
            dialog: true,
        };
    },
};
</script>
