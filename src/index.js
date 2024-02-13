import express from "express";
import productsRouter from "./routes/productsRoutes.js";
import cartRouter from "./routes/cartRouter.js";
import { __dirname } from "./path.js";
import upload from "./config/multer.js";

const app = express();
const PORT = 9002;

app.use(express.json());
app.use("/static", express.static(__dirname + "/public"));

app.use("/api/products", productsRouter);
app.use('/api/cart', cartRouter)
app.post("/upload", upload.single("product"), (req, res) => {
  try {
    console.log(req.file);
    res.status(200).send("Imagen cargada correctamente");
  } catch (error) {
    res.status(500).send("Error al cargar imagend");
  }
});

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
