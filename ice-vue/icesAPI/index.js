const express =require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
  console.log('00000',req,res,req.body);
})

app.listen(3000,()=>{
  console.log('监听3000');
});