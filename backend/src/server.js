import dotenv from 'dotenv';

// Load env variables immediately
dotenv.config();

import app from './app.js';

console.log("API token" + process.env.ACCESS_TOKEN)

const PORT = process.env.PORT|| "3000";

app.listen(PORT, ()=>{
    console.log("server listening on port"+ PORT);
});
