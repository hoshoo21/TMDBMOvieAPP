
require("dotenv").config();

dotenv.config();
const Acces_Token =process.env.ACCESS_TOEKN;
const Api_Key = process.env.API_KEY;
const instance= axios.create({
    baseURL : 'https://api.themoviedb.org/3/authentication'
   
})


instance.interceptors.request.use(
    async (config)=>{
       
        config.headers.Authorization= `Bearer ${ACCESS_TOEKN}`;
        config.headers.Accept = 'application/json'
        return config;
        },
    (err)=>{
        return Promise.reject(err);
    },
)

export default instance;