import express from 'express'
import userRouter from './main/routes/user.routes'

const PORT = 3003 //transformar esse cara numa ENV

export const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/user',userRouter )

app.get('/', (req: any, res: any) => {
    res.status(200).send('hello world')
})



app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})



