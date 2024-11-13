import { Router} from "express";
import ProductManager from "../managers/product.manager.js";

const localProdManager = new ProductManager('./products.json');

const router = Router();



router.get("/", async (req, res) => {
    try {
      const prods = await localProdManager.getAll(); 
      res.status(200).json(prods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const prod = await localProdManager.getById(id); 
      res.status(200).json(prod);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const prod = await localProdManager.create(req.body);
      res.status(201).json(prod);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.delete("/", async (req, res) => {
    try {
      await localProdManager.deleteAll();
      res.json({ message: "Todos los productos fueron eliminados exitosamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const prodDel = await localProdManager.delete(id);
      res
        .status(200)
        .json({ message: `Producto ID ${prodDel.id} fue eliminado exitosamente` });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const prodUpd = await localProdManager.update(req.body, id);
      res.status(200).json(prodUpd);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

export default router; 