const GettingStart = () => {
  return (
    <div className="w-full m-10 md:m-1">
      <div className=" px-10 py-6 border-2 border-[#FD7E14] rounded-lg w-full shadow-xl">
        <h1 className="text-3xl text-[#FD7E14] pt-4 pr-5 font-primary mb-5">
          Set Your Profile Information
        </h1>
        <form className="flex flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="formInput mb-5"
            required
          />
          <div className="flex justify-center">
            <p className="text-[#FD7E14] mr-3 font-primary font-bold">
              Designation
            </p>
            <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="checkBtn"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Student"
                required
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer font-primary"
                htmlFor="inlineRadio1"
              >
                Student
              </label>
            </div>
            <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="checkBtn"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Faculty"
                required
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer font-primary"
                htmlFor="inlineRadio2"
              >
                Faculty
              </label>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-start mt-3">
          <p className="text-[#FD7E14] mr-3 font-primary font-bold">
            Add a profile picture
            </p>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            required
            className="border-2 rounded-md p-2 w-full focus:outline-none my-3"
          />
          </div>
          <button className="btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default GettingStart;
