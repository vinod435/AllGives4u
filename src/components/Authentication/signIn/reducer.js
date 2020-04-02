import {LOGIN_ACTION,LOGIN_ERROR,LOGIN_SUCCESS} from './constant'
const intialState={
  login:[],
  
}

export const signInReducer=(state=intialState,action)=>{
    switch(action){
        case LOGIN_ACTION:return 'dsfdfd';
        case LOGIN_ERROR:return 'ress';
        case LOGIN_SUCCESS:return 'ress';
        default:return 'dfdfd'
    }
}