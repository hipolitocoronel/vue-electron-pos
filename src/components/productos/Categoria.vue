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
                <v-chip :color="`${colors[nonce - 1]} lighten-3`" label small>
                    {{ search }}
                </v-chip>
            </v-list-item>
        </template>
        <template v-slot:selection="{ attrs, item, parent, selected }">
            <v-chip
                v-if="item === Object(item)"
                v-bind="attrs"
                :color="`${item.color} lighten-3`"
                :input-value="selected"
                label
                small
            >
                <span class="pr-2">
                    {{ item.text }}
                </span>
                <v-icon small @click="parent.selectItem(item)">
                    $delete
                </v-icon>
            </v-chip>
        </template>
        <template v-slot:item="{ index, item }">
            <v-text-field
                v-if="editing === item"
                v-model="editing.text"
                autofocus
                flat
                background-color="transparent"
                hide-details
                solo
                @keyup.enter="edit(index, item)"
            ></v-text-field>
            <v-chip v-else :color="`${item.color} lighten-1`" dark label small>
                {{ item.text }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-list-item-action @click.stop>
                <v-btn icon @click.stop.prevent="edit(index, item)">
                    <v-icon>{{
                        editing !== item ? "mdi-pencil" : "mdi-check"
                    }}</v-icon>
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
        editingIndex: -1,
        items: [{ header: "Seleccione una opción o registre una" }],
        nonce: 1,
        menu: false,

        model: [
            /*
            {
                text: "Foo",
                color: "blue",
            },*/
        ],
        x: 0,
        search: null,
        y: 0,
    }),

    watch: {
        model(val, prev) {
            if (val.length === prev.length) return;

            this.model = val.map((v) => {
                if (typeof v === "string") {
                    v = {
                        text: v,
                        color: this.colors[this.nonce - 1],
                    };

                    this.items.push(v);

                    this.nonce++;
                }

                return v;
            });
        },
    },
    async created() {
        const pb = new PocketBase("http://127.0.0.1:8090");
        const categorias = await pb.collection("categoria").getFullList();
        categorias.map((cat) => {
            let colorAleatorio = Math.random() * 10 + 1;
            this.items = this.items.concat({
                text: cat.descripcion,
                color: this.colors[Math.trunc(colorAleatorio)],
            });
        });
    },

    methods: {
        edit(index, item) {
            if (!this.editing) {
                this.editing = item;
                this.editingIndex = index;
            } else {
                this.editing = null;
                this.editingIndex = -1;
            }
        },
        filter(item, queryText, itemText) {
            if (item.header) return false;

            const hasValue = (val) => (val != null ? val : "");

            const text = hasValue(itemText);
            const query = hasValue(queryText);

            return (
                text
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            );
        },
    },
};
</script>