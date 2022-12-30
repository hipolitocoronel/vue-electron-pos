<template>
    <v-combobox
        v-model="model"
        :filter="filter"
        :hide-no-data="!search"
        :items="items"
        :search-input.sync="search"
        hide-selected
        label="Categoria"
        multiple
        small-chips
        filled
    >
        <template v-slot:no-data>
            <v-list-item>
                <span class="subheading pr-2">Guardar</span>
                <v-chip
                    :color="`${colors[nonce - 1]} lighten-3`"
                    label
                    small
                    v-if="search"
                >
                    {{ search }}
                </v-chip>
            </v-list-item>
        </template>

        <template v-slot:selection="{ attrs, item, selected }">
            <v-chip
                v-if="item"
                v-bind="attrs"
                :color="`${item.color} lighten-3`"
                :input-value="selected"
                label
                small
            >
                <span class="pr-2">
                    {{ item.descripcion }}
                </span>
                <v-icon
                    small
                    @click="model = model.filter((c) => c.id !== item.id)"
                >
                    $delete
                </v-icon>
            </v-chip>
        </template>

        <template v-slot:item="{ item }">
            <v-text-field
                v-if="editing === item"
                v-model="editing.descripcion"
                autofocus
                flat
                background-color="transparent"
                hide-details
                solo
                @keyup.enter="editItem(item)"
            ></v-text-field>
            <v-chip v-else :color="`${item.color} lighten-4`" dark label small>
                {{ item.descripcion }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-list-item-action class="d-flex flex-row" @click.stop>
                <v-btn icon @click.stop.prevent="editing = item">
                    <v-icon>{{
                        editing !== item ? "mdi-pencil" : "mdi-check"
                    }}</v-icon>
                </v-btn>
                <v-btn icon @click="removeCategoria(item)">
                    <v-icon> mdi-delete </v-icon>
                </v-btn>
            </v-list-item-action>
        </template>
    </v-combobox>
</template>

<script>
import PocketBase from "pocketbase";
export default {
    name: "Categoria",
    data: () => ({
        activator: null,
        attach: null,
        colors: [
            "green",
            "purple",
            "indigo",
            "cyan",
            "teal",
            "orange",
            "pink",
            "blue",
            "lime",
            "amber",
            "brown",
        ],
        editing: null,
        items: [{ header: "Seleccione una opción o registre una" }],
        nonce: 1,
        menu: false,

        model: null,
        x: 0,
        search: null,
        y: 0,
    }),

    async created() {
        const pb = new PocketBase("http://127.0.0.1:8090");
        const categorias = await pb.collection("categoria").getFullList();
        categorias.map((cat) => {
            cat = { ...cat, color: this.colors[this.nonce - 1] };
            this.nonce += 1;
            this.items = this.items.concat(cat);
        });
    },

    watch: {
        model(val, prev) {
            if (!prev) {
                this.newCategory(val[0]).then((category) => {
                    console.log("category: ", category);

                    this.model.push(category);
                    this.items.push(category);
                    return this.nonce++;
                });
                return val.pop();
            }
            if (val.length === prev.length || 0) return;

            const lastCat = val[val.length - 1];

            if (typeof lastCat === "string") {
                val.pop();

                const newCategory = this.newCategory(lastCat);

                this.model.push(newCategory);
                this.items.push(newCategory);
                this.nonce++;
            }

            /*
            if (typeof val[length - 1] === "string") {
                const pb = new PocketBase("http://127.0.0.1:8090");

                pb.collection("categoria")
                    .create({ descripcion: newCategory })
                    .then((category) => {
                        category = {
                            ...category,
                            color: this.colors[this.nonce - 1],
                        };
                        this.items.push(category);
                        this.nonce += 1;

                        this.model.push(category);
                    });
            }*/
        },
    },

    methods: {
        editItem(item) {
            if (item) {
                this.editing = null;
            } else {
                this.editing = item;
            }
        },

        async newCategory(desc) {
            const pb = new PocketBase("http://127.0.0.1:8090");
            const category = await pb
                .collection("categoria")
                .create({ descripcion: desc });

            category.color = this.colors[this.nonce - 1];
            return category;
        },

        async removeCategoria(item) {
            const pb = new PocketBase("http://127.0.0.1:8090");
            await pb.collection("categoria").delete(item.id);
            this.items = this.items.filter((c) => c.id !== item.id);
            this.nonce -= 1;
        },
        filter(item, queryText) {
            if (item.header) return false;

            const hasValue = (val) => (val != null ? val : "");

            const descripcion = hasValue(item.descripcion);
            const query = hasValue(queryText);

            return (
                descripcion
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            );
        },
    },
};
</script>
