import { Request, Response, NextFunction } from "express";

  class UserValidator {

    public createUserValidator = (schema: any) => async (req: Request , res: Response, next: NextFunction) => {
        try {
            const user = req.body
            await schema?.validate({
                body: user
            })
            return next()
         
        } catch (error : any) {
            res.status(400).json({type: error?.name, message: error?.message})
        }

    }
  }

  export const  userValidator = new UserValidator()