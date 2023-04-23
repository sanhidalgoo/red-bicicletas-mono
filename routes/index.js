var express = require('express');
var router = express.Router();

const bicicletaController = require("../controllers/bicicleta");
const homeController = require('../controllers/home')
const loginController = require('../controllers/login')

router.get("/", homeController.index)
router.get("/login", loginController.showlogin)
router.post("/login", loginController.login)
router.get("/bicicletas", bicicletaController.list);
router.get("/bicicletas/:id/show", bicicletaController.show);
router.get("/bicicletas/create", bicicletaController.create_get);
router.post("/bicicletas/create", bicicletaController.create_post);
router.get("/bicicletas/:id/update", bicicletaController.update_get);
router.post("/bicicletas/:id/update", bicicletaController.update_post);
router.post("/:id/delete", bicicletaController.delete);

module.exports = router;
