import { Router } from "express";
import userManager from "../managers/user.manager.js";
//const userManager = new UserManager() 

const router = Router();

router.get("/", (req, res) => {
  res.render("view1");
});

router.get("/view2", (req, res) => {
  res.render("view2");
});

router.get("/view3", (req, res) => {
  const user = {
    firstname: "Noelia",
    lastname: "Coullery",
  };

  res.render("view3", { user });
});

// const usuarios = [
//     {
//         firstname: "Juan",
//         lastname: "Perez",
//         age: 30,
//         mail: "juan.perez@example.com",
//         phone: "123-456-7890",
//       },
    
//       {
//         firstname: "Maria",
//         lastname: "Lopez",
//         age: 25,
//         mail: "maria.lopez@example.com",
//         phone: "234-567-8901",
//       },
    
//       {
//         firstname: "Carlos",
//         lastname: "Gomez",
//         age: 35,
//         mail: "carlos.gomez@example.com",
//         phone: "345-678-9012",
//       },
    
//       {
//         firstname: "Ana",
//         lastname: "Martinez",
//         age: 28,
//         mail: "ana.martinez@example.com",
//         phone: "456-789-0123",
//       },
    
//       {
//         firstname: "Luis",
//         lastname: "Rodriguez",
//         age: 40,
//         mail: "luis.rodriguez@example.com",
//         phone: "567-890-1234",
//       },
    
//       {
//         firstname: "Laura",
//         lastname: "Fernandez",
//         age: 32,
//         mail: "laura.fernandez@example.com",
//         phone: "678-901-2345",
//       },
    
//       {
//         firstname: "Jose",
//         lastname: "Garcia",
//         age: 27,
//         mail: "jose.garcia@example.com",
//         phone: "789-012-3456",
//       },
    
//       {
//         firstname: "Lucia",
//         lastname: "Sanchez",
//         age: 26,
//         mail: "lucia.sanchez@example.com",
//         phone: "890-123-4567",
//       },
//       {
//         firstname: "Miguel",
//         lastname: "Ramirez",
//         age: 29,
//         mail: "miguel.ramirez@example.com",
//         phone: "901-234-5678",
//       },
//       {
//         firstname: "Sofia",
//         lastname: "Torres",
//         age: 31,
//         mail: "sofia.torres@example.com",
//         phone: "012-345-6789",
//       },
// ];

router.get('/actividad', (req, res) => {
const random =  Math.floor(Math.random() * 10);
const user = usuarios[random];
res.render('user', { user });
});

// nuevo clase 9 1 hs 35 aprox
router.get('/register', async (req, res)=> {
    res.render('form')
} )

router.get('/usuarios', async (req, res) => {
    const usuarios = await userManager.getUsers()
    res.render('users', { usuarios })
})

export default router;
