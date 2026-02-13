const { Router } = require("express");
const { submitInquiry, submitApplication } = require("../controllers/form");
const upload = require("../middlewares/multerUpload");

const router = Router();

router.post("/inquiry", submitInquiry);
router.post("/application", upload.single('resume'), submitApplication);

module.exports = router;