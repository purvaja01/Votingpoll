import api from "../Services/api";
const apiobject = new api();

class Userdatavalidation{
    async SignupValidation(data){
        if (data.name === "" || data.email === "" || data.password === ""){
            return "Fill All The Credentials";
        }
        const res = await apiobject.Signupapi(data);
        return res;

    }
};

export default Userdatavalidation;