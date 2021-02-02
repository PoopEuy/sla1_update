const express = require("express");
const router = express.Router();

const loggerController = require("../controllers/logger");

router.get("/", loggerController.getNoc);
router.get("/sla", loggerController.sla);
router.post("/", loggerController.create);

module.exports = router;
