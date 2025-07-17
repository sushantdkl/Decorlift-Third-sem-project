import express from "express";
import { orderController } from "../../controller/index.js";
 
const router = express.Router();
router.get("/", orderController.getAll);
router.post("/", orderController.create);
 
export { router as orderRouter };
 