import express from "express";

const app =  express()

const port = 5000;

// allow us to get json data
app.use(express.json())

let teaData = [];
let nextId = 1;


app.post('/add-tea',(req,res) =>{
    const {name,price} = req.body
    const newTea = {id: nextId++,name,price}
    teaData.push(newTea);
    res.status(200).send(teaData)
})

app.get("/all-teas",(req,res) =>{
    res.status(200).send(teaData);
})


// you can send data in body or you can use url like /single-tea/:id and extract data from req.param.id
app.get("/single-tea",(req,res) =>{
    const {id} = req.body
    const tea = teaData.find(t => t.id === id)

    if(tea){
        res.status(200).send(tea)
    }
    else{
        res.status(404).send("tea not found")
    }

    
})


// GET is used for getting some data, POST is used to add data to db, PUT is used to update data,DELETE is used to delete an item in db

// app.get("/",(req,res) =>{
//     res.send("response of a get request")
// })

// app.get("/nodejs",(req,res) =>{
//     res.send("learning backend now")
// })

// app.get("/twitter",(req,res) =>{
//     res.send("twitter app")
// })




app.listen(port,() =>{
    console.log("listning on port", port)
})
