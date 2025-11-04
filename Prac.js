const express=require('express')
const app=express();
const port=3000;
app.use(express.json());
app.get('/',(req,res)=>{
    const students = [
  { id: 1, name: "Amit", age: 22 },
  { id: 1, name: "Atul", age: 22.5 },
  { id: 2, name: "Priya", age: 21 },
  { id: 3, name: "Rahul", age: 23 },
  { id: 3, name: "Karan", age: 20 }
];
    res.send(students)
})
app.post('/home',(req,res)=>{
      const{number,id}=req.body
    res.send(`Your Number Is ${number} And Id Is ${id}`)
})
app.listen(port,()=>{
    console.log(`Server IS Runnig : http://localhost:${port}`)
})
app.post('/login',(req,res)=>{
    const{email,password}=req.body
    res.send(`Email : ${email} password : ${password}`)
})