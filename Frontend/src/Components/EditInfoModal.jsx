import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const resetPassword = async (data) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/profileChangePassword",
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to change Password or network problems");
  }
};


const EditInfoModal = ({ isVisible, onClose }) => {
  const {register,handleSubmit,watch,formState:{errors},reset} = useForm();
  const navigate = useNavigate();

  const submitPass = async (data) => {
    const result = await resetPassword(data);
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);     
    }
    reset();
    onClose();
    navigate("/profile");
  };

    const handle = (e) => {
        if(e.target.id === "wrapper")
            onClose();
    };

  if (!isVisible) return null;

  return (
    <div
      id="wrapper"
      onClick={handle}
      className="bg-black fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="flex flex-col items-start justify-center bg-white rounded-lg w-[600px] p-6">
        <h1 className="text-xl text-[#192655] font-semibold font-primary text-center mb-4">
          Update Password
        </h1>
        <form className="w-full" onSubmit={handleSubmit(submitPass)} noValidate>
          <input
            type="password"
            placeholder="Update Your Password"
            className="border-2 border-[#FD7E14] rounded-md p-2 w-full focus:outline-none mb-3"
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
          <p className=" mb-2 text-red-500 font-semibold">{errors.password?.message}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-2 border-[#FD7E14] rounded-md p-2 w-full focus:outline-none mb-3"
            {...register("confirmPassword", {
              validate: (value) =>{
                if(watch('password') != value){
                  return "Your passwords do no match";
                }
              }                
            })}
          />
           <p className=" mb-2 text-red-500 font-semibold">{errors.confirmPassword?.message}</p>
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Update
            </button>
            <button className="btn inline-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditInfoModal;