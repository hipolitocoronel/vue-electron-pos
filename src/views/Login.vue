<template>
    <div class="container-login blue" v-if="!userLogged">
        <v-card class="form-container elevation-0">
            <h1 class="blue-grey--text text--darken-4">Ingresar</h1>
            <v-form @submit.prevent="login">
                <v-text-field
                    name="username"
                    label="Nombre de usuario"
                    id="email"
                    v-model="username"
                    required
                ></v-text-field>
                <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    label="Contraseña"
                    counter
                    @click:append="showPassword = !showPassword"
                    v-model="password"
                    required
                ></v-text-field>

                <v-fade-transition>
                    <div
                        v-if="errorMessage"
                        class="error-container red lighten-1 text-center my-4 py-2 rounded"
                    >
                        <span class="white--text">{{ errorMessage }}</span>
                    </div>
                </v-fade-transition>

                <v-btn
                    class="mt-4 blue white--text"
                    type="submit"
                    :loading="authLoading"
                    >Ingresar</v-btn
                >
                <div class="mt-4">
                    <a
                        to="/login"
                        class="text-decoration-none blue-grey--text"
                        @click=""
                        >Olvidaste tu contraseña?</a
                    >
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import authService from "@/services/auth";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Login",
    data: () => ({
        username: "",
        password: "",
        showPassword: false,
        errorMessage: "",
        authLoading: false,
    }),
    computed: {
        ...mapGetters(["userLogged"]),
    },
    methods: {
        ...mapActions(["setUserLogged"]),
        login() {
            if (
                (!this.username && !this.password) ||
                !this.username ||
                !this.password
            ) {
                this.errorMessage = "Ambos campos son obligatorios";
                setTimeout(() => (this.errorMessage = ""), 5000);
            } else {
                const dataUser = {
                    username: this.username,
                    password: this.password,
                };

                this.authLoading = true;

                authService
                    .login(dataUser)
                    .then((userLogged) => {
                        this.username = "";
                        this.password = "";
                        this.setUserLogged(userLogged);
                    })
                    .catch((error) => {
                        console.log("error", error);
                        this.errorMessage = error.response.data;
                        setTimeout(() => (this.errorMessage = ""), 5000);
                    })
                    .finally(() => (this.authLoading = false));
            }
        },
    },
};
</script>

<style scoped>
.container-login {
    display: grid;
    place-items: center;
    height: 100%;
}

.form-container {
    min-width: 400px;
    padding: 30px;
}
</style>
