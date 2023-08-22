const express= require("express");
const app=express();
const port=4000;
const mysql=require('./connection').con;

app.set("view engine","hbs");
app.set("views","./view")
app.use(express.static(__dirname +"/public"))

//routing
app.get("/",(req,res)=>{
    res.render("index");

});
app.get("/add",(req,res)=>{
    res.render("add");

});
app.get("/search",(req,res)=>{
    res.render("search");

});
app.get("/update",(req,res)=>{
    res.render("update");

});
app.get("/delete",(req,res)=>{
    res.render("delete");

});
app.get("/view",(req,res)=>{
    res.render("view");

});

app.get("/addstudent",(req,res)=>{
    //fetching data 
    const s_name=req.query.s_name;
    const phone=req.query.phone;
    const email=req.query.email;
    const gender=req.query.gender;
    let qry = "select * from stu where email=? or phone=?";
    mysql.query(qry, [email, phone], (err, results) => {
        if (err)
            console.log("error");
        else {
            res.send(results);
        }
    

});
});

app.listen(port,(err)=>{
    if(err){
        console.log("error");
    }
    
else {
    console.log("server is running");
}


})