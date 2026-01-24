import  axios  from "axios";


const Acces_Token =process.env.ACCESS_TOEKN;
const Api_Key = process.env.API_KEY;
const instance= axios.create({
    baseURL : 'https://scabbardless-nell-fashionably.ngrok-free.dev'
   
})


instance.interceptors.request.use(
    async (config)=>{
s      
        return config;
        },
    (err)=>{
        return Promise.reject(err);
    },
)

export default instance;