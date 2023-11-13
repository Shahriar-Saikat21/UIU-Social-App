import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="w-full">
          <div className=" px-10 py-6 border-2 border-[#FD7E14] rounded-lg w-full shadow-xl">
            <h1 className="text-4xl text-[#FD7E14] pt-4 pr-5 font-primary mb-5">
              Signup
            </h1>
            <form className="flex flex-col justify-center items-center ">
              <input
                type="text"
                placeholder="Enter Your User ID or Student ID"
                className="formInput"
              />
              <p className=" mb-2 text-[#FD7E14] font-semibold"></p>
              <input
                type="email"
                placeholder="Enter Your UIU Provided Email"
                className="formInput"
              />
              <p className=" mb-2 text-[#FD7E14] font-semibold"></p>
              <input
                type="password"
                placeholder="Set Your Password"
                className="formInput"
              />
              <p className=" mb-2 text-[#FD7E14] font-semibold"></p>
              <input
                type="password"
                placeholder="Confirm Password"
                className="formInput"
              />
              <p className=" mb-2 text-[#FD7E14] font-semibold"></p>
              <button className="btn">Send OTP</button>
            </form>
            
            <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-sm inline-block font-primary text-[#FD7E14] mb-2">
              Check your UIU provided email for OTP
            </h2>
            <input
                type="text"
                placeholder="Enter OTP"
                className="formInput"
              />
              <button className="btn">Signup</button>
            </div>
            
          </div>
        </div>
      );
};

export default Signup;