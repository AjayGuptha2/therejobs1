import { MAKE_REQUEST,FAIL_REQUEST, GET_USER_REQUEST } from "./Actiontype"
import axios from "axios"

export const makeRequest = () => {
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return{
        type:FAIL_REQUEST,
        payload: err
    }
}
export const getUserList = (data) => {
    return{
        type:GET_USER_REQUEST,
        payload: data
    }
}


export const FetchUserList =() => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get("http://localhost:5001/user").then(res => {
            const userList=res.data;
            dispatch(getUserList(userList));
        }).catch(err => {
            dispatch(failRequest(err.message))
        }) 
    }
}