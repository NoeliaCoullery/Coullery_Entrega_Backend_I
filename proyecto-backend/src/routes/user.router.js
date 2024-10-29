import { Router } from "express";
import { userValidator } from '../middlewares/user.validator.js';
const userManager = new UserManager ('./users.json');
import UserManager from '../managers/user.manager.js';

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userManager.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.getUserById(id); //ver si es user o users
    res.status(200).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", [userValidator], async (req, res) => {
  try {
    const user = await userManager.createUser(req.body); // ver si es user o users
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    await userManager.deleteUsers();
    res.json({ message: "Usuarios eliminados exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userDel = await userManager.deleteUser(id);
    res
      .status(200)
      .json({ message: `Usuario ID ${userDel.id} eliminado exitosamente` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userUpd = await userManager.updateUser(req.body, id);
    res.status(200).json(userUpd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 