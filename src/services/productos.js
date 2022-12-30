import PocketBase from "pocketbase";
import axios from "axios";
const pb = new PocketBase("http://127.0.0.1:8090");
const baseUrl =
    "http://localhost:8090/api/collections/productos/records?expand=categoria";
    

const getProductos = async () => {
    const {data} = await axios.get(baseUrl);
    return data;
};

const removeProducto = async (id) =>
    await pb.collection("productos").delete(id);

export default { getProductos, removeProducto };
