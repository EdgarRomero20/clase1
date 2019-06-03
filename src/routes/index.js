const express = require("express");
const router = express.Router();
const usuarios = require("./usuarios");
const nuevoUsuario = require("./nuevoUsuario")

router.use("/usuarios", usuarios);
router.use("/nuevoUsuario", nuevoUsuario);

module.exports = router;