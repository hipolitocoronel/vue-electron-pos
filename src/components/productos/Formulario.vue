<template>
    <!--FORMULARIO DE PRODUCTO-->
    <div class="form-container" :style="!dialog ? 'display: none;' : ''">
        <v-form class="form">
            <div class="pa-8" style="flex: 1">
                <p>
                    {{ editProducto ? "Modificar " : "Nuevo " }}
                    <span class="font-weight-bold">producto</span>
                </p>
                <v-tabs color="dark">
                    <v-tab>Formulario</v-tab>
                    <v-tab>Importar</v-tab>
                    <v-tab-item>
                        <v-row class="mt-5" no-gutters>
                            <v-col cols="12" v-if="editProducto">
                                <v-text-field
                                    v-model="id"
                                    filled
                                    label="ID"
                                    disabled
                                    prepend-inner-icon="mdi-key"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-text-field
                                    v-model="codigo"
                                    label="Código"
                                    prepend-inner-icon="mdi-barcode"
                                    hint="Si no tenes un código, el sistema lo autogera por vos"
                                    persistent-hint
                                    filled
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col>
                                <v-textarea
                                    v-model="descripcion"
                                    filled
                                    name="input-7-4"
                                    :rules="[
                                        (v) => !!v || 'Decripcion requerida',
                                    ]"
                                    rows="1"
                                    label="Descripción"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="stock"
                                    type="number"
                                    label="Stock"
                                    prepend-inner-icon="mdi-numeric"
                                    filled
                                    class="mr-2"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="stockMinimo"
                                    label="Stock mínimo"
                                    type="number"
                                    hint="Te informaremos cuando llegues a esta cantidad"
                                    persistent-hint
                                    prepend-inner-icon="mdi-counter"
                                    filled
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="precioCompra"
                                    class="mr-2"
                                    label="Precio de compra"
                                    prepend-inner-icon="mdi-cash"
                                    filled
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="precio"
                                    label="Precio de venta"
                                    prepend-inner-icon="mdi-cash-multiple"
                                    filled
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" md="6">
                                <Categoria class="mr-2" />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-file-input
                                    accept="image/*"
                                    label="Imagen"
                                    filled
                                    :prepend-icon="null"
                                    prepend-inner-icon="mdi-camera"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <v-tab-item> permisos </v-tab-item>
                </v-tabs>
            </div>
            <v-divider></v-divider>
            <div class="pa-5 form-actions">
                <v-btn text @click="resetForm()">cancelar</v-btn>
                <v-btn color="secondary darken-2" @click="">guardar</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import productosService from "@/services/productos";
import Categoria from "./Categoria.vue";

export default {
    name: "Formulario",
    data: () => ({
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
        ...mapGetters("productos", ["dialog", "editProducto", "id"]),
        //datos del formulario
        codigo: {
            get() {
                return this.$store.getters["productos/codigo"];
            },
            set(newCodigo) {
                this.$store.dispatch("productos/setCodigo", newCodigo || "");
            },
        },
        descripcion: {
            get() {
                return this.$store.getters["productos/descripcion"];
            },
            set(newDescripcion) {
                this.$store.dispatch(
                    "productos/setDescripcion",
                    newDescripcion || ""
                );
            },
        },
        stock: {
            get() {
                return this.$store.getters["productos/stock"];
            },
            set(newStock) {
                this.$store.dispatch("productos/setStock", newStock || "");
            },
        },
        stockMinimo: {
            get() {
                return this.$store.getters["productos/stockMinimo"];
            },
            set(newStock) {
                this.$store.dispatch("productos/setStockMinimo", newStock || "");
            },
        },
        precio: {
            get() {
                return this.$store.getters["productos/precio"];
            },
            set(newPrecio) {
                this.$store.dispatch("productos/setPrecio", newPrecio || "");
            },
        },
        precioCompra: {
            get() {
                return this.$store.getters["productos/precioCompra"];
            },
            set(newPrecio) {
                this.$store.dispatch("productos/setPrecioCompra", newPrecio || "");
            },
        },
        imagen: {
            get() {
                return this.$store.getters["productos/imagen"];
            },
            set(newImagen) {
                this.$store.dispatch("productos/setImagen", newImagen || "");
            },
        },
    },
    methods: {
        ...mapActions("productos", ["resetForm"]),
        guardarUsuario() {
            if (this.$refs.form.validate()) {
                const newUser = {
                    username: this.username,
                    name: this.name,
                    password: this.password,
                };
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
            }
        },
    },
    components: { Categoria },
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
