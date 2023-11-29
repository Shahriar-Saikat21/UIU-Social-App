import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const signupWithOTP = async (data)=>{
  try {
    const response = await axios.post('http://localhost:3000/signupValidation', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create account or network problems');
  }
}

const SignupOTP = () => {
  const navigate = useNavigate();
  const [enteredOTP, setEnteredOTP] = useState("");
  const h = enteredOTP;
  const otpbyUser = sessionStorage.getItem('otp');
  const data ={
    userName:sessionStorage.getItem('userName'),
    userEmail:sessionStorage.getItem('userEmail'),
    accountType:sessionStorage.getItem('accountType'),
    userPassword:sessionStorage.getItem('userPassword'),
  }

  const signup = async () => {
      if(h===otpbyUser){
        const result = await signupWithOTP(data);
        if(result.success){
          sessionStorage.removeItem('otp');
          sessionStorage.removeItem('userName');
          sessionStorage.removeItem('userEmail');
          sessionStorage.removeItem('accountType');
          sessionStorage.removeItem('userPassword');
          alert(result.message);
          navigate("/login");
        }else{
          sessionStorage.removeItem('otp');
          sessionStorage.removeItem('userName');
          sessionStorage.removeItem('userEmail');
          sessionStorage.removeItem('accountType');
          sessionStorage.removeItem('userPassword');
          alert(result.message);
          navigate("/");
        }
      }else{
        alert("OTP is incorrect");
        navigate("/");
      }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-sm inline-block font-primary text-[#192655] mb-2">
        Check your provided email for OTP
      </h2>
      <input
        type="text"
        placeholder="Enter OTP"
        className="formInput"
        onChange={(e) => setEnteredOTP(e.target.value)}
        required
      />
      <button className="btn" onClick={signup}>Signup</button>
    </div>
  );
};

export default SignupOTP;
