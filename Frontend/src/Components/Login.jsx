import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
const logindata = async(data) => {
  try {
    const response = await axios.get(`http://localhost:3000/login?email=${data.email}&password=${data.password}`,{
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to login or network problems");
  }
};

const Login = () => {
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  const navigate = useNavigate();

  const useLogin = async (data) => {
    const result = await logindata(data);
    if(result.success){
      sessionStorage.setItem('status', result.role);
      if(result.role === 'admin'){
        navigate('/admin-home');
      }else if(result.role === 'student'){
        navigate('/student-home');
      }else{
        navigate('/instructor-home');
      }
    }else{
      alert(result.message);
      navigate('/');      
    }
    reset();
  };

  return (
    <div className="w-full">
      <div className=" px-10 py-6 border-2 border-[#FD7E14] rounded-lg w-full shadow-xl">
        <h1 className="text-4xl text-[#FD7E14] pt-4 pr-5 font-primary mb-5">
          Login
        </h1>
        <form className="flex flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Enter Your User Id"
            className="formInput mb-5"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
              required: {
                value: true,
                message: "User Email is required",
              }
            })}
          />
          <p className=" mb-2 text-[#FD7E14] font-semibold"></p>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="formInput"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <p className=" mb-2 text-[#FD7E14] font-semibold"></p>
          <button className="btn">Login</button>
        </form>
        
        <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-sm inline-block font-primary">
          Forget Password?
          <Link
            to={"/forgetPassword"}
            className="text-xl text-[#FD7E14] underline font-primary ml-3"
          >
            Reset Password
          </Link>
        </h2>
        <Link
            to={"/signup"}
            className="btnTwo"
          >
            Create Account
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
