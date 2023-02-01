// import node modules
import express from "express";

// import routes
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

const port = 3333;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));


app.use(router);

app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
});

export default app;
