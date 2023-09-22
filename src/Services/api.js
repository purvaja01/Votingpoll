import axios from "axios";

class api{
    async Signupapi(data){
        const response = await axios.post("http://localhost:8001/signup", data);
        if(response.data.message === "User created successfully"){
            return true;
        }
    }
    async Signinapi(data){
        try {
            const response = await axios.post('http://localhost:8001/signin',data);
            
            if (response.status === 200) {
              localStorage.setItem('loggedinuser',JSON.stringify(response.data.userdata))
            
              return response.data.message;
            } else {
              return 'Authentication failed';
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
}

export default api;