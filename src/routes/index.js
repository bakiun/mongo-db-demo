const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const { storeList, newStore } = require("../controller/store");
const newPersonal = require("../controller/personal");
const newProduct = require("../controller/product");

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocument));

router.get("/store", storeList);
router.post("/store", newStore);
router.post("/personal", newPersonal);
router.post("/product", newProduct);

module.exports = router;
