const {Pool}=require("pg")

const pool=new Pool({
    user:"gopi",
    host:"localhost",
    database:"forms",
    password:"gopinath2002",
    port:"8541"
});
module.exports=pool;