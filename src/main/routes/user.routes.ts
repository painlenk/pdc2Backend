
import { userController } from "../../controller/user/user.controller";
import { Router, Request, Response } from "express";

const router = Router()

router.get('/all', (req: Request, res : Response) => {
    const users = userController.getAllUsers()
    res.status(200).send({users})
})

router.get('/:id', (req: Request, res : Response) => {
    const id = req?.params
    //validar os parametros que vou receber

    const user = userController.getUser(String(id))
    res.status(200).send(user)
})

router.post('/create', (req: Request, res : Response) => {
    const user = req.body 
    //validar os parametros
    userController.createUser(user)
    res.status(200).send({created: true})
})

router.put('/:id', (req: Request, res : Response) => {
    const user = req.body 
    const id = req.params
    //validar os parametros
    userController.updateUser(id ,user)
    res.status(200).send({created: true})
})

router.delete('/:id', (req: Request, res : Response) => {
    const user = req.body 

    //validar os parametros
    userController.deleteUser(user)
    res.status(200).send({created: true})
})

export default router