const express=require("express")
const cors=require("cors")
const pool=require("./db")
const app=express();
app.use(cors());
app.use(express.json())


app.post("/add",async(req,res)=>{
    try{
        const{jobtitle,empname,mail,number,gender,qualification,pastexp,joindate}=req.body;
        const user=pool.query(`insert into table employee values(${jobtitle},${empname},${mail},${number},${gender},${qualification},${pastexp},${joindate})`)
        res.json(user.rows[0])

    }
    catch(err){
        console.log(err)
    }
})
app.get("/details",async(req,res)=>{
       try{
        const user=pool.query("select * from employee")
        res.json(user.rows);
       }
       catch(err){
        console.log(err);
       }
})
app.listen(3000,()=>{
    console.log("server started");
})