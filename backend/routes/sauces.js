const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const stuffCtrl = require("../controllers/sauces");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, stuffCtrl.createSauce);
router.put("/:id", auth, multer, stuffCtrl.modifySauce);
router.delete("/:id", auth, stuffCtrl.deleteSauce);
router.get("/", auth, stuffCtrl.getAllSauce);
router.get("/:id", auth, stuffCtrl.getOneSauce);
router.post("/:id/like", auth, stuffCtrl.likeDislike);

module.exports = router;
