const express=require('express')
const path=require('path');
const PORT=process.env.PORT|| 5000;//si le port est précisé sion 5000
const HOST="localhost";
const app=express()

app.use('/',express.static(path.join(__dirname,'dist','my-app1')))
app.get('',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist','my-app1','index.html'))
})

//lancement
app.listen(PORT,()=>{
  console.log(`server running at http://${HOST}:${PORT}`)
})
