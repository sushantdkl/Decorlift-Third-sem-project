import express from "express";
import { addressController } from "../../controller/index.js";
 
const router = express.Router();
router.get("/", addressController.getAll);
router.post("/", addressController.create);
router.put("/:id", addressController.update);
router.delete("/:id", addressController.deleteById);
router.get("/user/:userId", addressController.getByUserId);
 
export { router as addressRouter };
 