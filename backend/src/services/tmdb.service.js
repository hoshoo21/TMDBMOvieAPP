import httpClient from '../utils/httpClient.js';
// const tmdb = axios.create({
//     baseURL: 'https://api.themoviedb.org',
//     headers:{
//         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
//     }
// });
const BASE_URL='https://api.themoviedb.org/3/search/movie'
export const searchMovies =async(query,page)=>{
    try{
        console.log(query+page);
        const {data} = await httpClient.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=${page}`);
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
        
    }
}

export const getMovieCredits=async(movie_id)=>{
 // 'https://api.themoviedb.org/3/movie/840598/credits?language=en-US'
 `https://api.themoviedb.org/3/movie/${movie_id}/credits&adult=true&language=en-US`
 console.log(`https://api.themoviedb.org/3/movie/${movie_id}/credits`);
    try{
        const {data}= await httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`)
        return data;
    }
    catch(error){
        console.log(error);
    }
}
