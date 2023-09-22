const user = require("../models/user");

class signuser {
  async validateSignupData(req, res) {
    const saveData = req.body;
    try {
      if (!/^[\w-]+(\.[\w-]+)*@jmangroup\.com$/.test(saveData.email)) {
        
        res.status(209).json({message:"Invalid email format"});
      } else if (
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          saveData.password
        )
      ) {
        res.status(209).json({message:"Invalid password format"});
      } else {
        
        const newUser = await user.create(saveData);
        
        res
          .status(201)
          .json({ message: "User created successfully", user: saveData });
      }
    } catch (error) {
      console.error("Error in signup route:", error);
      res.status(500).json({ message: "Internal server error" });
    }
    return { success: true };
  }

  async validateLoginData(req,res){
    try{
      
      const saveData = req.body;
      if (!/^[\w-]+(\.[\w-]+)*@jmangroup\.com$/.test(saveData.email)) {
        res.status(209).json({message:"Invalid email format"});
      }
      const userdata = await user.findOne({where : {email:saveData.email}});
      if (userdata){
        if (userdata.password === saveData.password){
          res.status(200).json({userdata,message:"Login Successful."})
        }else{
          res.status(209).json({message:"Invalid Credentials."})
        }
      }else{
        res.status(209).json({message:"Invalid Credentials."})
      }
    }catch(error){
      console.log(error);
    }
  }
}
const ValidateSignupData = new signuser();


module.exports = ValidateSignupData;
