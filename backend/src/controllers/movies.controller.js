import {searchMovies} from '../services/tmdb.service.js';

export const search = async(req,res, next)=>{
    try {
         const {query,page} = req.query;
         const movies = await searchMovies(query);
         res.json(movies);

    }
    catch(error){
        console.log("Error"+ error);
        next(error);
    }
}