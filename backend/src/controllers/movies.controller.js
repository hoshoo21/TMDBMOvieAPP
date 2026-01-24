import {searchMovies, getMovieCredits} from '../services/tmdb.service.js';

export const search = async(req,res, next)=>{
    try {
         const {query,page} = req.query;
         console.log(query);
         const movies = await searchMovies(query, page);
         res.json(movies);

    }
    catch(error){
        console.log("Error"+ error);
        next(error);
    }
}

export const getCredits = async(req,res,next)=>{
        try {
            const {movie_id} = req.query;
            const credits = await getMovieCredits(movie_id);
            res.json(credits); 
        }
        catch(error){
            console.log("error"+error);
            next(error);
        }
    }