import { MAKE_REQUEST,FAIL_REQUEST,GET_USER_REQUEST } from "./Actiontype";

const initialState={
    loading:true,
    userList:[],
    userObj:{},
    errmessage:''

}

export const Reducer = (state=initialState,action) => {
    switch(action.type){
        case MAKE_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FAIL_REQUEST:
            return{
                ...state,
                loading:false,
                errmessage:action.payload
            }
        case GET_USER_REQUEST:
            return{
                ...state,
                loading:false,
                errmessage:'',
                userList:action.payload,
                userObj:{}
            }
        default: return state;
    }
}