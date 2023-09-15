const express = require("express");
const router = express.Router();
const {
    getOneResults,
    getAllResults
} = require("../controllers/wikiController");
// const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);
router.route("/one").get(getOneResults);
router.route("/all").get(getAllResults);

module.exports = router;