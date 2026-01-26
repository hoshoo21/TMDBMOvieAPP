import { Router } from "express";
import { getActorDetail,getGenres,search,getCredits,getSimilar,getGenreMovies } from "../controllers/movies.controller.js";

const router= Router();
router.get('/search', search);
router.get('/getmoviecredits',getCredits);
router.get('/getmoivesbyActor', getActorDetail);
router.get('/getsimilarmovies', getSimilar);
router.get('/getgenres', getGenres); 
router.get('/getgenremovies',getGenreMovies);
export default router;

