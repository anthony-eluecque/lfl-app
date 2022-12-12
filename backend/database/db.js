const {Client} = require('pg');
const client  = new Client({
    host:"127.0.0.1",
    user:"antorak",
    port:5433,
    password:"antorak123",
    database:"pokemons"
})

client.connect();

client.query(`SELECT * from type`,(error,result)=>{
    if (!error) 
        {console.log(result.rows)}
    else {console.log(error.message);}
    client.end();
})