import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express-serve-static-core'

const app = express()
/*Middlewares*/

/*Config*/
const config = {
    host:'localhost',
    port:8000
}
/*Server*/
app.get('/',(req:Request,res:Response)=>{
    res.send('Hello')
})
app.listen(config.port,config.host,()=>{
    console.log(`Server listening at http://${config.host}:${config.port}`)
})

