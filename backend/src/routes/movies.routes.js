import { Router } from "express";
import { search,getCredits } from "../controllers/movies.controller.js";

const router= Router();
router.get('/search', search);
router.get('/getmoviecredits',getCredits);
export default router;

