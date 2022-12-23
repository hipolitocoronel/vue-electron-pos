<template>
    <!--FORMULARIO DE USUARIO-->
    <div class="form-container" :style="!dialog ? 'display: none;' : ''">
        <v-form class="form">
            <div class="pa-8" style="flex: 1">
                <p>
                    {{ editUser ? "Modificar " : "Nuevo " }}
                    <span class="font-weight-bold">usuario</span>
                </p>
                <v-tabs color="dark">
                    <v-tab>Formulario</v-tab>
                    <v-tab>Permisos</v-tab>
                    <v-tab-item>
                        <v-row class="mt-5">
                            <v-col cols="12" v-if="editUser">
                                <v-text-field
                                    v-model="id"
                                    filled
                                    label="ID"
                                    disabled
                                    prepend-inner-icon="mdi-key"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="username"
                                    label="Nombre de usuario"
                                    prepend-inner-icon="mdi-account"
                                    hint="- Lo utilizarás para poder ingresar"
                                    persistent-hint
                                    filled
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="name"
                                    label="Nombre Completo"
                                    prepend-inner-icon="mdi-account-circle"
                                    filled
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" v-if="editUser">
                                <v-switch
                                    v-model="changePassword"
                                    class="px-6"
                                    label="Cambiar contraseña"
                                ></v-switch>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                                v-if="changePassword || !editUser"
                            >
                                <v-text-field
                                    label="Contraseña"
                                    v-model="password"
                                    :type="show ? 'text' : 'password'"
                                    :append-icon="
                                        show ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    @click:append="show = !show"
                                    filled
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                                v-if="changePassword || !editUser"
                            >
                                <v-text-field
                                    label="Confirmar constraseña"
                                    :type="show1 ? 'text' : 'password'"
                                    :append-icon="
                                        show1 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    @click:append="show1 = !show1"
                                    filled
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-if="editUser">
                            <v-col>
                                <v-switch
                                    v-model="state"
                                    label="Activado"
                                    class="px-6"
                                ></v-switch>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <v-tab-item> permisos </v-tab-item>
                </v-tabs>
            </div>
            <v-divider></v-divider>
            <div class="pa-5 form-actions">
                <v-btn text @click="setDialog(false)">cancelar</v-btn>
                <v-btn color="secondary darken-2" @click="setDialog(false)"
                    >guardar</v-btn
                >
            </div>
        </v-form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import authService from "@/services/auth";

export default {
    name: "Formulario",
    data: () => ({
        show: false,
        show1: false,
        changePassword: false,

        //validacion formulario
        rules: {
            required: (value) => !!value || "Requerido",
            username: (value) => {
                try {
                    const validarMayusculas = /[A-Z]/g;
                    const validarEspacios = /[ ]/g;

                    if (value) {
                        //validando mayusculas

                        let result = value.match(validarMayusculas);
                        if (result) return "No se permiten mayusculas";

                        //validando espacios
                        result = value.match(validarEspacios);
                        if (result) return "No se permiten espacios";

                        return true;
                    }
                    return false;
                } catch (error) {
                    console.log(error);
                }
            },
        },

        error: false,
        errorMsj: "",
    }),
    computed: {
        ...mapGetters("users", ["dialog", "editUser", "id"]),

        //datos del formulario
        username: {
            get() {
                return this.$store.getters["users/username"];
            },
            set(newUsername) {
                this.$store.dispatch("users/setUsername", newUsername || "");
            },
        },
        name: {
            get() {
                return this.$store.getters["users/name"];
            },
            set(newName) {
                this.$store.dispatch("users/setName", newName || "");
            },
        },
        password: {
            get() {
                return this.$store.getters["users/password"];
            },
            set(newPassword) {
                this.$store.dispatch("users/setPassword", newPassword || "");
            },
        },
        state: {
            get() {
                return this.$store.getters["users/state"];
            },
            set(newState) {
                this.$store.dispatch("users/setState", newState || true);
            },
        },
    },
    methods: {
        ...mapActions("users", ["setDialog", "setEditUser", "updateUser"]),
        guardarUsuario() {
            if (this.$refs.form.validate()) {
                const newUser = {
                    username: this.username,
                    name: this.name,
                    password: this.password,
                };

                authService
                    .register(newUser)
                    .then(() => alert("todo ok"))
                    .catch((error) => {
                        this.error = true;
                        this.errorMsj = error.response.data;

                        setTimeout(() => {
                            this.error = false;
                            this.errorMsj = "";
                        }, 4000);
                    });
            }
        },
        actualizarUsuario() {
            if (this.$refs.form.validate()) {
                const user = {
                    id: this.id,
                    username: this.username,
                    name: this.name,
                    password: this.password,
                    state: this.state,
                };

                authService
                    .updateUser(user)
                    .then((user) => {
                        this.updateUser(user);
                        this.setDialog(false);
                    })
                    .catch((error) => console.error(error));
            }
        },
        cancelUser() {
            this.setDialog(false);
            this.setEditUser(false);
            this.$refs.form.reset();
        },
    },
};
</script>

<style scoped>
.form-container {
    position: fixed;
    background: rgb(0, 0, 0, 0.3);
    min-height: 100%;
    min-width: 100%;
    right: 0;
    top: 0;
    z-index: 100;
}

.form {
    background: #fff;
    width: 45%;
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.form-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.col {
    padding: 0 !important;
}
</style>
