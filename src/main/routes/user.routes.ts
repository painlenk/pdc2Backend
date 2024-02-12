
import { userController } from "../../controller/user/user.controller";
import { Router, Request, Response } from "express";
import { userValidator } from "../middlewares/user/createUserValidator";
import { createUserSchema } from "../middlewares/user/userSchema";
const router = Router()

router.get('/all', (req: Request, res : Response) => {
    const users = userController.getAllUsers()
    res.status(200).send('getAll')
})
router.post('/create',userValidator.createUserValidator(createUserSchema) ,(req: Request, res : Response) => {
  
    try {
        const user = req.body 
        userController.createUser(user)
        res.status(200).send('postCreate')

    }catch(error : any) {
        console.log({error: error.message})
    }
})

router.put('/:id', (req: Request, res : Response) => {
    const user = req.body 
    const id = req.params
    //validar os parametros
    userController.updateUser(id ,user)
    res.status(200).send('putID')
})

router.get('/:id', (req: Request, res : Response) => {
    const id = req?.params
    //validar os parametros que vou receber

    /* const user = userController.getUser(String(id)) */
    res.status(200).send('getId')
})

router.delete('/:id', (req: Request, res : Response) => {
    const user = req.body 

    //validar os parametros
    userController.deleteUser(user)
    res.status(200).send('deleteId')
})

export default router