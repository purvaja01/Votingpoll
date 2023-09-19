import axios from "axios";

class api{
    async Signupapi(data){
        const response = await axios.post("http://localhost:1601",data);
    }
}

export default api;