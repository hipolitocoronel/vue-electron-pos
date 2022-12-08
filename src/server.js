const app = require("./backend/app");
const http = require("http");
const PORT = process.env.BACK_PORT || 3301;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
