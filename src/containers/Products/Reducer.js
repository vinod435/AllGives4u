import {ProductAdd} from './Constant'
const intialState={
productadd:[]
}

export function Reducer(state=intialState,action){
    switch(action.type){
        case ProductAdd:
        return state
        default : return state
    }
}