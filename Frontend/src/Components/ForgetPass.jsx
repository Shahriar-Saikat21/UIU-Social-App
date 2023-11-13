

const ForgetPass = () => {
    return (
        <div className="w-full">
          <div className=" px-10 py-6 border-2 border-[#FD7E14] rounded-lg w-full shadow-xl">
            <h1 className="text-4xl text-[#FD7E14] pt-4 pr-5 font-primary mb-5">
              Forget Password
            </h1>
            <form className="flex flex-col justify-center items-center ">
              <input
                type="email"
                placeholder="Enter your UIU provided email"
                className="formInput mb-5"
              />
              <p className=" mb-2 text-[#FD7E14] font-semibold"></p>
              <button className="btn">Send Reset Link</button>
            </form>        
          </div>
        </div>
    );
};

export default ForgetPass;