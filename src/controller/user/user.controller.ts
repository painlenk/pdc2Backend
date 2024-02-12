
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
        //chamar o responsavel por criar o usuário
        const userCreated = [{name: 'leonardo', lastName: 'valle'}]

        return userCreated
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