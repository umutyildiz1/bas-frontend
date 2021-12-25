import { LOGOUT_SUCCESS,LOGIN_SUCCESS } from "./actionCostants"

export const authActionLogout = () =>{
    return {
        type: LOGOUT_SUCCESS
      }
}

export const authActionLogin = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}



