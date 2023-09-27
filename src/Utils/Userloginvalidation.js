import api from "../Services/api";
const apiobj = new api();

class Userloginvalidation{
    async loginValidation(data){
        if (data.email !== "" && data.password !== "") {
            const validdata = await apiobj.Signinapi(data);
            console.log(validdata);
            return validdata;
          }
        else if (data.email === "purvajavashistha@jmangroup.com" && data.password === "Purvaja@123"){
            const validadmin = await apiobj.Signinapi(data);
            return validadmin;
        }
        else{
            return null;
        }
    }
}


const userloginvalidation = new Userloginvalidation()

export default userloginvalidation;