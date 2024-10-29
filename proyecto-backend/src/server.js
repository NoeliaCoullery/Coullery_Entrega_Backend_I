import express from "express";

import { products } from "../products.js";
import userRouter from "./routes/user.router.js";

import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(`${process.cwd()}/src/public`)); 
app.use('/static', express.static(path.join(process.cwd(), "src", "public")));
app.use(morgan('dev'))
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);

app.listen(8080, () => console.log("server OK en puerto 8080"));
