import { createUserSchema } from "./userSchema";
import * as Yup from 'yup'

export type CreateUserValidator = Yup.InferType<typeof createUserSchema>