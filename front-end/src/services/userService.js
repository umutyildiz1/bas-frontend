import axios from "axios";

class UserService {
    createUser(requestBody){
        //axios.post //(api url, request body(json))
        return axios.post("/users/createUser",requestBody)
        
    }
    getByUserId = (id) =>{
        let user = axios.get("/users/getUserById",id)
    }
    logIn(token){
        return axios.post("/api/auth/handle",{},{auth:token})
    }
}

export default UserService;