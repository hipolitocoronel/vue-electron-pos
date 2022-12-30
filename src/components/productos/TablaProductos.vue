<template>
    <v-row>
        <v-col cols="12">
            <v-data-table
                height="50vh"
                :headers="headers"
                :items.sync="productos"
                :page.sync="page"
                :items-per-page="itemsPerPage"
                :search="search"
                checkbox-color="success"
                item-key="id"
                v-model="selected"
                show-select
                class="grey lighten-5 row-pointer"
                @page-count="pageCount = $event"
                disable-pagination
                hide-default-footer
                @click:row="rowClick"
            >
                <template v-slot:item.imagen="{ item }">
                    <v-img
                        v-if="item.imagen"
                        :src="`${urlImg}${item.id}/${item.imagen}?thumb=55x55`"
                        width="55px"
                        height="55px"
                        style="margin: auto"
                    ></v-img>
                    <span v-else>N/A</span>
                </template>

                <template v-slot:item.codigo="{ item }">
                    <v-chip>
                        {{ item.codigo }}
                    </v-chip>
                </template>
                <template v-slot:item.stock="{ item }">
                    <strong
                        :class="
                            item.stockMinimo >= item.stock
                                ? 'red--text'
                                : 'green--text'
                        "
                        >{{ item.stock }}</strong
                    >
                </template>
                <template v-slot:item.precio="{ item }">
                    {{ formatearPrecio(item.precio || "") }}
                </template>
                <template v-slot:item.expand.categoria.descripcion="{ item }">
                    {{
                        item.expand?.categoria?.descripcion
                            ? item.expand?.categoria?.descripcion
                            : "Sin categoría"
                    }}
                </template>
            </v-data-table>
        </v-col>

        <v-col
            justify="center"
            v-if="selected.length > 0"
            transition="slide-y-reverse-transition"
        >
            <div class="delete-container rounded-pill pa-3">
                <div>
                    Seleccionaste
                    <span class="font-weight-bold">{{ selected.length }}</span>
                    {{ selected.length > 1 ? "productos" : "producto" }}
                    <v-btn outlined class="ml-3" small @click="selected = []"
                        >Limpiar</v-btn
                    >
                </div>
                <v-btn text color="error" small @click="eliminarProducto"
                    >Eliminar
                    {{ selected.length > 1 ? "productos" : "producto" }}</v-btn
                >
            </div>
        </v-col>
    </v-row>
</template>

<script>
import productosService from "@/services/productos";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "TablaProductos",
    data: () => ({
        page: 1,
        pageCount: 0,
        itemsPerPage: 4,
        selected: [],
        headers: [
            {
                text: "Imagen",
                value: "imagen",
                align: "center",
                sortable: false,
            },
            { text: "Código", value: "codigo", align: "center" },
            { text: "Descripción", value: "descripcion", sortable: false },
            { text: "Stock", value: "stock" },
            { text: "Precio", value: "precio" },
            {
                text: "Categoria",
                value: "expand.categoria.descripcion",
                sortable: false,
            },
        ],

        urlImg: "http://localhost:8090/api/files/llw4gqvgqfdiaow/",
    }),
    computed: {
        ...mapGetters("productos", ["search", "productos"]),
    },
    async created() {
        const returnedProductos = await productosService.getProductos();
        console.log("productos: ", returnedProductos);
        this.setProductos(returnedProductos.items);
    },
    methods: {
        ...mapActions("productos", [
            "setDialog",
            "setEditProducto",
            "setId",
            "setCodigo",
            "setDescripcion",
            "setStock",
            "setStockMinimo",
            "setPrecio",
            "setPrecioCompra",
            "setCategoria",
            "setImagen",
            "setProductos",
            "removeProducto",
        ]),
        formatearPrecio(precio) {
            var result = precio.toLocaleString("es-ar", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 2,
            });
            return result;
        },

        rowClick(producto) {
            this.setDialog(true);
            this.setEditProducto(true);
            this.setId(producto.id);
            this.setCodigo(producto.codigo);
            this.setDescripcion(producto.descripcion);
            this.setStock(producto.stock);
            this.setStockMinimo(producto.stockMinimo);
            this.setPrecio(producto.precio);
            this.setPrecioCompra(producto.precioCompra);
            this.setCategoria(producto.categoria);
            this.setImagen(producto.imagen);
        },

        eliminarProducto() {
            this.selected.forEach(async (producto) => {
                await productosService.removeProducto(producto.id);
                this.removeProducto(producto);
            });

            const msj =
                this.selected.length > 1
                    ? "Productos eliminados correctamente"
                    : "Producto eliminado correctamente";

            this.$toast.success(msj, {
                position: "top-right",
            });

            this.selected = [];
        },
    },
};
</script>

<style scoped>
.delete-container {
    background: #fff;
    border: 1px solid #ccc;
    max-width: 530px;
    margin: auto;

    display: flex;
    justify-content: space-between;

    animation: animacion 0.5s;
}

@keyframes animacion {
    from {
        transform: translateY(20px);
    }

    to {
        transform: translateY(0);
    }
}

.v-btn {
    text-transform: capitalize;
}

.row-pointer >>> tbody tr :hover {
    cursor: pointer;
}
</style>
