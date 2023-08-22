const mysql=require('mysql2');

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'prajnagoswami',
    database:'studentdb',
    port:4000
   
});
con.connect((err)=>{
    if(err){
        console.log("error");

    } 
    else{
        console.log("connection created----::");

    }
   
})
module.exports=con;