import { ICreateUser } from "@src/useCases/user/createUser/interfaces/createUserInterface"
import { CreateUserUseCase } from "../../useCases/user/createUser/createUserUseCase"

class UserController  {

    public getUser(id: string) {
        //chamar o responsavel por trazer o usuário
        const user = [{name: 'leonardo', lastName: 'valle'}]
        return user
    }

    public getAllUsers() {
         //chamar o responsavel por trazer o usuário
        const users = [{name: 'leonardo', lastName: 'valle'}, {name: 'teste', lastname: 'testeee'}]
        return users
    }

    public createUser(user: any /*tipar esse cara */) {
        // validar se o usuário ja existe 
        //chamar o responsavel por criar o usuário
    
        try{
            const createdUser = new CreateUserUseCase().createUser(user)
            return createdUser

        }catch (error) {

            console.log(error)
            return false    
        }
    }

    public updateUser(user: any, id: string /*tipar esse cara */) {
        //chamar o responsavel por atualizar o usuário
        const userUpdated = [{name: 'leonardo', lastName: 'valeeeeee'}]

        return userUpdated

    }

    public deleteUser(user : any /*tipar esse cara */) {
        const userDeleted = [{name: 'leonardo', lastName: 'valle'}]
        return userDeleted
    }
}

export const userController = new UserController()


