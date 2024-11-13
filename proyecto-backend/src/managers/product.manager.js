import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

export default class ProductManager {
    constructor(path) {
        this.path = path; 
    }


    async getAll (){
        try {
            if (fs.existsSync(this.path)) {
                const products = await fs.promises.readFile(this.path, "utf-8");
                return JSON.parse(products);
                } else return [];
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async create(obj) {
        try{
            if (!obj.title || !obj.price || !obj.description){
                throw new Error ("Todos los campos son obligatorios");
            }   const product = {
            id: uuidv4(), ...obj};
            const products = await this.getAll();
            products.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
            return product;
            } catch (error) {
            throw new Error (error.message);
        }
    }

    async getById(id){
        try {
            const products = await this.getAll(); 
            if (!products.length > 0) throw new Error("El listado de productos está vacío");
            const product = products.find(product => product.id === id);
            if (!product) throw new Error("Producto no encontrado");
            return product;
        } catch (error) {
            throw new Error (error.message);
            
        }
    }

    async update(obj, id){
        try {
            const products = await this.getAll();
            let prod = await this.getById(id);
            prod = { ...prod, ...obj };
            const newArray = products.filter((prod) => prod.id !== id);
            newArray.push(prod);
            await fs.promises.writeFile(this.path, JSON.stringify(newArray));
            return prod;
                }catch (error) {
            throw new Error (error);

        }
    }

    async delete(id){
        try { 
            const prod = await this.getById(id);
            const products = await this.getAll();
            const newArray = products.filter((prod) => prod.id !== id);
            await fs.promises.writeFile(this.path, JSON.stringify(newArray));
            return prod;
        } catch (error){
            throw new Error(error);
        }
    }

    async deleteAll() {
    try {
        const products = await this.getAll();
        if(!products.length > 0) throw new Error("El listado de productos está vacío");
        await fs.promises.unlink(this.path);
    } catch (error) {
        throw new Error(error);
    }
    }
}
