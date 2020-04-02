import {LOGIN_ACTION,LOGIN_ERROR,LOGIN_SUCCESS} from './constant'


export const LoginAction=(data)=>({
    type:LOGIN_ACTION,
    payLoad:data
})

export const LoginSuccess=(data)=>({
        type:LOGIN_SUCCESS,
        payLoad:data
})
export const LoginError=(data)=>({
    type:LOGIN_ERROR,
    payLoad:data
})