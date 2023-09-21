import api from "../Services/api";
const apiobject = new api();




class Userdatavalidation {
     static isValidEmail(email) {
        const emailPattern = /^[\w-]+(\.[\w-]+)*@jmangroup\.com$/;
        return emailPattern.test(email);
      }
      
      // Password validation function

      static isValidPassword(password) {
        // Password pattern: at least one uppercase letter, one special character, one number, and a minimum length of 8 characters
        const passwordPattern =
          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
      }
    
   async SignupValidation(data) {
    if (data.name === "" || data.email === "" || data.password === "") {
      return "Fill All The Credentials";
    } else if (!Userdatavalidation.isValidEmail(data.email)) {
      return "Invalid email format";
    } else if (!Userdatavalidation.isValidPassword(data.password)) {
      return "Invalid password format";
    } else {
      const res = await apiobject.Signupapi(data);
      return res;
    }
  }
}

 export const  validation = new Userdatavalidation();

