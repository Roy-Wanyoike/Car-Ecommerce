import Joi from 'joi'
import { ref } from 'joi'





export const registration = Joi.object({
    userName:Joi.string().required().messages({
        'string.empty':' Please add a User Name'
    }),
    email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'
    }),
    password:Joi.string().required().pattern(new
        RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')),
    address:Joi.string(),
    fullname:Joi.string(),
    phoneNo:Joi.string(),
    country:Joi.string(),
    confirmPassword:Joi.equal(ref('password'))
})

export const loginSchema= Joi.object({
    userName:Joi.string().required().messages({
        'string.empty':' Please add a User Name'
    }),
    password:Joi.string().required().pattern(new
        RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$'))
})