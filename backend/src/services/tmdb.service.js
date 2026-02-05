import httpClient from '../utils/httpClient.js';
// const tmdb = axios.create({
//     baseURL: 'https://api.themoviedb.org',
//     headers:{
//         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
//     }
// });
const BASE_URL='https://api.themoviedb.org/3'
export const searchMovies =async(query,page)=>{
    try{
        console.log(query+page);
        const {data} = await httpClient.get(`${BASE_URL}/search/movie?query=${query}&include_adult=true&language=en-US&page=${page}`);
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
        
    }
}

export const getMovieCredits=async(movie_id)=>{
 // 'https://api.themoviedb.org/3/movie/840598/credits?language=en-US'
 console.log(`https://api.themoviedb.org/3/movie/${movie_id}/credits`);
    try{
        const {data}= await httpClient.get(`${BASE_URL}/movie/${movie_id}/credits`)
        
        return data;
    }
    catch(error){
        console.log(error);
    }
}


export const getActorMovies =async(name,page)=>{
    try{
        const {data} = await httpClient.get(`${BASE_URL}/search/person?query=${encodeURIComponent(name)}&include_adult=true&language=en-US&page=${page}`);
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error)

    }
}

export const getDetails = async(id )=>{
    //https://api.themoviedb.org/3/person/person_id?language=en-US
    try{
        const {data} = await httpClient.get(`${BASE_URL}/person/${encodeURIComponent(id)}?include_adult=true&language=en-US`);
        return data;
    }
    catch (error){
        console.log(error);
    }
}


export const getSimilarMovies=async(movie_id,page)=>{
    //'https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1'
    try {
       
        const {data} = await httpClient.get(`${BASE_URL}/movie/${movie_id}/similar?include_adult=true&language=en-US&page=${page}&append_to_response=videos`)
       console.log("similar movies");
       console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export const getGenreList = async ()=>{
    try {
        const {data} = await httpClient.get(`${BASE_URL}/genre/movie/list?language=en`)
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export const getGenreBasedMovies = async (genreId,page)=>{
    try {
        const {data} = await httpClient.get(`${BASE_URL}/discover/movie?include_adult=true&&with_genres=${genreId}&page=${page}&sort_by=vote_average.desc`)
        return data;
    }
    catch(error){
        console.log(error);
    }
}