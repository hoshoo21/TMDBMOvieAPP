import {getDetails, getSimilarMovies,searchMovies, getGenreBasedMovies,getGenreList,getActorMovies, getMovieCredits} from '../services/tmdb.service.js';

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

export const getActorDetail = async(req,res,next)=>{
    try{
        const {name, page,id} = req.query;
        let payload = {}    
        console.log(name);
        if (id){
            const [details, movies] = await Promise.allSettled([
                                                    getDetails(id),
                                                    getActorMovies(name,page)   
                                                     ]);           
            if (details.status == "fulfilled"){
              payload.details = details.value;
            }
            if (movies.status == "fulfilled") {
                payload.movies = movies.value;
            }
        }
        else {
            const movies = await getActorMovies(name,page);
            payload.movies = movies;
        }
                                
        res.json(payload);
    }
    catch(error){
        console.log('error'+error);
        next(error);
    }
}

export const getSimilar = async (req,res,next)=>{
  try{
    const {id, page} = req.query ;
    const similarMovies = await getSimilarMovies(id, page)
    res.json(similarMovies);
  }
  catch(error){
    console.log('error'+error);
    next(error);
  }
}
export const getGenres = async (req,res,next)=>{
    try {
        const genreData= await getGenreList();
        res.json(genreData);
    }
    catch(error){
        console.log('error'+error);
        next(error);
    }
}

export const getGenreMovies=async (req,res,next)=>{
    try {
        const {genreid, page} = req.query;
        const moviesData = await getGenreBasedMovies(genreid,page);
        res.json(moviesData);
    }
    catch(error){
        console.log('error' + error);
        next(error);
    }
}