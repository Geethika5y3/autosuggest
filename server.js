const express=require('express');
const app=express();
const port=process.env.PORT||3002;
app.use(express.static('frontend'));
app.listen(port,function(){
    console.log("successfully running at http://localhost:"+port);
});