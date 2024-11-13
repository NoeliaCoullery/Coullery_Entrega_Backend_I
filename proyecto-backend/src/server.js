import express from "express";
import handlebars from "express-handlebars";

import { products } from "../products.js";
import userRouter from "./routes/user.router.js";

import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import morgan from "morgan";
import path from "path";
import viewsRouter from './routes/views.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(`${process.cwd()}/src/public`)); 
app.use('/static', express.static(path.join(process.cwd(), "src", "public")));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(process.cwd(), 'src', 'views'));
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);

app.use('/', viewsRouter);
app.use('/users', userRouter);

app.listen(8080, () => console.log("server OK en puerto 8080"));
