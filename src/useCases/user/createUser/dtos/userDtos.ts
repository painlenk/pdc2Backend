import { uuid } from "uuidv4";
import { ICreateUser } from "../interfaces/createUserInterface";



export class userDto {

    public normalizeUser (user: any) {
        
       const normalizedUser : ICreateUser =  {
            id: uuid(),
            name: user?.name,
            userName: user?.userName, 
            email: user?.email, 
            password: user?.password,
            createdAt: new Date().toISOString()

        }

        return normalizedUser
    }
}

