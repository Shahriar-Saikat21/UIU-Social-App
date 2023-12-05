import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import SignupOTP from "./SignupOTP";

const signupDataSubmit = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/signupOtp", data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create account or network problems");
  }
};

const Signup = () => {
  const [otp, setOtp] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const useSubmit = async (data) => {
    const result = await signupDataSubmit(data);
    if (result.success) {
      sessionStorage.removeItem("otp");
      sessionStorage.removeItem("userSID");
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("userEmail");
      sessionStorage.removeItem("accountType");
      sessionStorage.removeItem("userPassword");
      sessionStorage.setItem("userSID", result.data.userSID);
      sessionStorage.setItem("userName", result.data.userName);
      sessionStorage.setItem("userEmail", result.data.userEmail);
      sessionStorage.setItem("accountType", result.data.accountType);
      sessionStorage.setItem("userPassword", result.data.userPassword);
      sessionStorage.setItem("otp", result.otp);
      setOtp(true);
    } else {
      alert(result.message);
    }
    reset();
  };
  return (
    <div className="w-full">
      <div className=" px-10 py-6 border-2 border-[#FD7E14] rounded-lg w-full shadow-xl">
        <h1 className="text-4xl text-[#FD7E14] pt-4 pr-5 font-primary mb-5">
          Signup
        </h1>
        <form
          className="flex flex-col justify-center items-center "
          onSubmit={handleSubmit(useSubmit)}
          noValidate
        >
          <input
            type="text"
            placeholder="Enter Your User ID or Student ID"
            className="formInput"
            {...register("userSID", {
              required: {
                value: true,
                message: "UIU ID is required",
              },
            })}
          />
          <p className=" mb-2 text-red-500 font-semibold">
            {errors.userID?.message}
          </p>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="formInput"
            {...register("userName", {
              required: {
                value: true,
                message: "Username is required",
              },
              maxLength: {
                value: 30,
                message: "Username must be less than 30 characters",
              },
            })}
          />
          <p className=" mb-2 text-red-500 font-semibold">
            {errors.userName?.message}
          </p>
          <input
            type="email"
            placeholder="Enter Your UIU Provided Email"
            className="formInput"
            {...register("userEmail", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[uiu.ac.bd]+)*$/,
                message: "UIU provided email is required",
              },
              required: {
                value: true,
                message: "UIU provided email is required",
              },
            })}
          />
          <p className=" mb-2 text-red-500 font-semibold">
            {errors.userEmail?.message}
          </p>
          <select
            name="accountType"
            className="my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("accountType")}
          >
            <option value="Student">Student</option>
            <option value="alumni ">Alumni </option>
            <option value="Faculty">Faculty</option>
          </select>
          <input
            type="password"
            placeholder="Set Your Password"
            className="formInput mb-3"
            {...register("userPassword", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="formInput"
            {...register("confirmPassword", {
              validate: (value) =>{
                if(watch('userPassword') != value){
                  return "Your passwords do no match";
                }
              }                
            })}
          />
          <p className=" mb-2 text-red-500 font-semibold">{errors.confirmPassword?.message}</p>
          <button className="btn">Send OTP</button>
        </form>
        {otp ? <SignupOTP /> : <></>}
      </div>
    </div>
  );
};

export default Signup;
