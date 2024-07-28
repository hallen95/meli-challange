import express from "express";
import { getItems, getItemById } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemById);

export default router;
