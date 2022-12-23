<template>
    <div class="alert-container">
        <!--CONFIRM ALERT-->
        <v-snackbar
            v-model="snackbar"
            color="blue-grey darken-2"
            centered
            vertical
        >
            Desea desactivar el usuario?

            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar = false">
                    Cancelar
                </v-btn>
                <v-btn text v-bind="attrs" @click="snackbar = false">
                    Confirmar
                </v-btn>
            </template>
        </v-snackbar>

        <!--ALERT-->
        <v-snackbar
            v-model="snackbar"
            color="red"
            top
            right
        >
            Usuario desactivado exitosamente

            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar = false">
                    OK
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: "Alert",
    data: () => ({
        snackbar: true,
        mode: "confirm",
    }),
};
</script>

<style scoped>
.v-snack__wrapper {
    margin-top: 200px;
}
</style>
