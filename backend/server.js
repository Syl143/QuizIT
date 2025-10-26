// backend/server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ static: "./public" });

const PORT = process.env.PORT || 10000;

// ✅ Enable CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
