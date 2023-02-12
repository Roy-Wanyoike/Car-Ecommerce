
import express, { json } from "express"
import router from './Router'
import authRouter from "./Router/authRoute"

const app = express()

//registering some middlewares
app.use(json()) //adds a body to the request

app.use('/users',router)
app.use('/auth', authRouter)

const port =process.env.PORT || 4000

app.get('/home',(req,res)=>{
    res.send("testing postman")
})

app.listen(port,()=>{
    console.log("server running")
})