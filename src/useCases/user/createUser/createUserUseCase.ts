import { CreateUserRepository } from "./createUserRepository";
import { userDto } from "./dtos/userDtos";

export class CreateUserUseCase {

    //criar a logica de criação de usuário
    //criar o DTO para persistir os dados no banco
    // enviar os dados para o banco
    //retornar o status
    public createUser (user : any /**tipar  */) {
     
        try {
            const normalizedUser = new userDto().normalizeUser(user)
            //poderia chamar uma service pra fazer alguma coisa kk
            
            //enviar os dados pro banco
            const saveUserOnDatabase = new CreateUserRepository().save(normalizedUser)
           
            
            return saveUserOnDatabase
    
        }catch(error) {
            console.log(error)
            return false
        }

        
       
    }


}