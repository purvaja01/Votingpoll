import axios from "axios";

class api{
    async Signupapi(data){
        const response = await axios.post("http://localhost:8001",data);
    }
}

export default api;