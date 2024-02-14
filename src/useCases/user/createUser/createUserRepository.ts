import { ICreateUser } from "./interfaces/createUserInterface";

export class CreateUserRepository {

    public save(user: ICreateUser) {

        //inserir try/catch quando chamar o database

        console.log(user)
        return user
    }
}