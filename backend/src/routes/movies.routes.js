import { Router } from "express";
import { getActorDetail,search,getCredits } from "../controllers/movies.controller.js";

const router= Router();
router.get('/search', search);
router.get('/getmoviecredits',getCredits);
router.get('/getmoivesbyActor', getActorDetail);
export default router;

