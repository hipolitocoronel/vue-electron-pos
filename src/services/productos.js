import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

const getProductos = async () => {
  const users = await pb.collection("productos").getList();
  return users;
};

const removeUser = async (id) => await pb.collection("users").delete(id);

export default { getProductos, removeUser };
