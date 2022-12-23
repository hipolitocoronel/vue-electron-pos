import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

const getUsers = async () => {
    const users = await pb.collection("users").getList();

    return users;
};

export default { getUsers };
