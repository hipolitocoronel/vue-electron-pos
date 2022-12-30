export const productos = {
    namespaced: true,
    state: () => ({
        dialog: false,
        editProducto: false,
        productos: [],
        search: "",

        //datos para el formulario
        id: "",
        codigo: "",
        descripcion: "",
        stock: "",
        stockMinimo: "",
        precio: "",
        precioCompra: "",
        categoria: "",
        imagen: "",
    }),
    mutations: {
        setSearch(state, search) {
            state.search = search;
        },
        setDialog(state, dialog) {
            state.dialog = dialog;
        },
        setEditProducto(state, editProducto) {
            state.editProducto = editProducto;
        },
        setProductos(state, productos) {
            state.productos = productos;
        },
        removeProducto(state, producto) {
            state.productos = state.productos.filter(
                (p) => p.id !== producto.id
            );
        },
        resetForm(state) {
            state.dialog = false;
            state.editProducto = false;
            state.id = "";
            state.codigo = "";
            state.descripcion = "";
            state.stock = "";
            state.stockMinimo = "";
            state.precio = "";
            state.precioCompra = "";
            state.categoria = "";
            state.imagen = "";
        },

        //datos para el formulario
        setId(state, id) {
            state.id = id;
        },
        setCodigo(state, codigo) {
            state.codigo = codigo;
        },
        setDescripcion(state, descripcion) {
            state.descripcion = descripcion;
        },
        setStock(state, stock) {
            state.stock = stock;
        },
        setStockMinimo(state, stock) {
            state.stockMinimo = stock;
        },
        setPrecio(state, precio) {
            state.precio = precio;
        },
        setCategoria(state, categoria) {
            state.categoria = categoria;
        },
        setImagen(state, imagen) {
            state.imagen = imagen;
        },
    },
    actions: {
        setSearch({ commit }, search) {
            commit("setSearch", search);
        },
        setDialog({ commit }, dialog) {
            commit("setDialog", dialog);
        },
        setEditProducto({ commit }, editProducto) {
            commit("setEditProducto", editProducto);
        },
        setProductos({ commit }, productos) {
            commit("setProductos", productos);
        },
        removeProducto({ commit }, producto) {
            commit("removeProducto", producto);
        },
        resetForm({ commit }) {
            commit("resetForm");
        },

        //datos para el formulario
        setId({ commit }, id) {
            commit("setId", id);
        },
        setCodigo({ commit }, codigo) {
            commit("setCodigo", codigo);
        },
        setDescripcion({ commit }, desc) {
            commit("setDescripcion", desc);
        },
        setStock({ commit }, stock) {
            commit("setStock", stock);
        },
        setStockMinimo({ commit }, stock) {
            commit("setStockMinimo", stock);
        },
        setPrecio({ commit }, precio) {
            commit("setPrecio", precio);
        },
        setCategoria({ commit }, categoria) {
            commit("setCategoria", categoria);
        },
        setImagen({ commit }, imagen) {
            commit("setImagen", imagen);
        },
    },
    getters: {
        search: (state) => state.search,
        dialog: (state) => state.dialog,
        editProducto: (state) => state.editProducto,
        productos: (state) => state.productos,

        //datos del formulario
        id: (state) => state.id,
        codigo: (state) => state.codigo,
        descripcion: (state) => state.descripcion,
        stock: (state) => state.stock,
        stockMinimo: (state) => state.stockMinimo,
        precio: (state) => state.precio,
        precioCompra: (state) => state.precioCompra,
        categoria: (state) => state.categoria,
        imagen: (state) => state.imagen,
    },
};
