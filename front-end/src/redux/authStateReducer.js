import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionCostants"

const logOutState = {
    isLogin: false,
    username: undefined, 
    userId : undefined,
    userPhoneNumber : undefined,
    userEmail : undefined,
    userSurname : undefined
    
  }

  const authStateReducer =(state = {...logOutState},action) =>{
    if(action.type === LOGOUT_SUCCESS){
      return logOutState
    }else if(action.type ===LOGIN_SUCCESS){
        const data = action.payload
        const {userId,userPhoneNumber,userEmail,userSurname} = data
        const payload = {
            username : data.userFName,
            isLogin : true,
            userId ,
            userPhoneNumber,
            userEmail,
            userSurname 

        }
        return payload
    }
    return state
  }

  export default authStateReducer;