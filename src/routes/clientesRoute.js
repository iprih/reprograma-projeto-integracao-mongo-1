const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

router.post("/", controller.post)


module.exports = router
