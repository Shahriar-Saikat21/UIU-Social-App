import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';


const resetPassword = async (data)=>{
  try {
    const response = await axios.put('http://localhost:3000/resetPassword', data,{
      withCredentials: true,   
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create account or network problems');
  }
}
const ResetPAss = () => {
  const {register,handleSubmit,watch,formState:{errors},reset} = useForm();
  const navigate = useNavigate();

  const useReset = async (data) => {
    if(localStorage.getItem('resetAuth') === 'ok'){
      const email = localStorage.getItem('resetEmail');
      const resetdata = {
        email: email,
        password: data.password
      }
      const result =  await resetPassword(resetdata);
      if(result.success){
        alert(result.message);
        navigate('/');
      } else{
        alert(result.message);
      }
    } else{
      alert("You are not authorized to reset password");
    }
    localStorage.removeItem('resetAuth');
    localStorage.removeItem('resetEmail');
    reset();
  };
    return (
        <div className="w-full">
          <div className=" px-10 py-6 border-2 border-[#FD7E14] rounded-lg w-full shadow-xl">
            <h1 className="text-4xl text-[#FD7E14] pt-4 pr-5 font-primary mb-5">
              Reset Password
            </h1>
            <form className="flex flex-col justify-center items-center " onSubmit={handleSubmit(useReset)} noValidate>
              <input
                type="password"
                placeholder="Enter your new password"
                className="formInput mb-5"
                {...register("password", {
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
              <p className=" mb-2 text-red-500 font-semibold">
            {errors.password?.message}
          </p>
              <input
                type="password"
                placeholder="Confirm password"
                className="formInput mb-5"
                {...register("confirmPassword", {
                  validate: (value) =>{
                    if(watch('password') != value){
                      return "Your passwords do no match";
                    }
                  }                
                })}
              />
              <p className=" mb-2 text-red-500 font-semibold">
            {errors.confirmPassword?.message}
          </p>
              <button className="btn">Set New Password</button>
            </form>        
          </div>
        </div>
    );
};

export default ResetPAss;