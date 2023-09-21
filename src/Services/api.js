import axios from "axios";

class api{
    async Signupapi(data){
        const response = await axios.post("http://localhost:8001/signup", data);
        if(response.data.message === "User created successfully"){
            return true;
        }
    }
}

export default api;