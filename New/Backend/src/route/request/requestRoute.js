import express from "express";
import { requestController } from "../../controller/request/requestController.js";
 
const router = express.Router();
router.get("/", requestController.getAll);
router.put("/:id/approve", requestController.updateStatus);
router.put("/:id/decline", requestController.updateStatus);
 
export { router as requestRouter };
 