import api from "../Services/api";
const apiobj = new api();

class Userloginvalidation{
    async loginValidation(data){
        if (data.email !== "" && data.password !== "") {
            const validdata = await apiobj.Signinapi(data);
            console.log(validdata);
            return validdata;
          }
        else{
            return "NUll";
        }
    }
}


const userloginvalidation = new Userloginvalidation()

export default userloginvalidation;