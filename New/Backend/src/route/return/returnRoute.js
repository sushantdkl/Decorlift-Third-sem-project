import express from "express";
import { returnRequestController } from "../../controller/index.js";
const router = express.Router();
router.get("/", returnRequestController.getAll);
router.post("/", returnRequestController.create);
router.put("/:id/approve", returnRequestController.updateStatus);
router.put("/:id/decline", returnRequestController.updateStatus);
export { router as returnRequestRouter };
 