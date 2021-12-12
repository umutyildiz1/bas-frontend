import axios from "axios";

class UserService {
    createUser(requestBody){
        //axios.post //(api url, request body(json))
        return axios.post("/users/createUser/",requestBody)
        
    }
    getByUserId = (id) =>{
        let user = axios.get("/users/getUserById",id)
        console.log(user)
    }
    logIn(token){
        console.log(token)
        axios.post("/api/auth/handle",{},{auth:token})
    }
}

export default UserService;