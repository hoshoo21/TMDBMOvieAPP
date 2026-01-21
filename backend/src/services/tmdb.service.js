import httpClient from '../utils/httpClient.js';
// const tmdb = axios.create({
//     baseURL: 'https://api.themoviedb.org',
//     headers:{
//         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
//     }
// });
export const searchMovies =async(query)=>{
    try{
        console.log(query);
        const {data} = await httpClient.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`);
        return data;
    }
    catch(error){
        console.log(error);
        
    }
}

