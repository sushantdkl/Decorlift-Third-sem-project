import express from "express";
import { returnRequestController } from "../../controller/return/returnRequestController.js";
import upload from "../../middleware/multerConfig.js";

const router = express.Router();
router.get("/", returnRequestController.getAll);
router.post("/", upload.single("photo"), returnRequestController.create);
router.put("/:id/approve", returnRequestController.updateStatus);
router.put("/:id/decline", returnRequestController.updateStatus);
export { router as returnRequestRouter };
 