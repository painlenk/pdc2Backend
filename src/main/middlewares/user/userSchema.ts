import * as yup from 'yup'

export const createUserSchema = yup.object({
    body: yup.object({
        name: yup.string().min(3).required(),
        userName: yup.string().min(3).required(),
        email: yup.string().email().required(),
        password: yup.string().required()
    })
})