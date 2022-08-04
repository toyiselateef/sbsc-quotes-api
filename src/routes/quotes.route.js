import express from "express";
import { getQuote } from "../controllers/quotes.controller.js";

const router = express.Router();

router.get("/getquote", getQuote);

export default router;
