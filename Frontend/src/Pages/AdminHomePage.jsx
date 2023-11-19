import Pic from "../assets/DemoPic2.jpg";

const AdminHomePage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center pt-[80px]">
      <div className="flex md:flex-row flex-col justify-center items-center w-full md:w-1/2 h-auto gap-3  p-5">
        <input
          type="text"
          placeholder="Enter User Name or ID ...."
          className="formInput h-[45px]"
        />
        <button className="btn">Search</button>
      </div>

      <div className="flex flex-col w-full md:w-1/2 h-auto justify-start items-start p-5">
        <h2 className="text-2xl font-primary font-semibold text-[#FD7E14] mb-5">
          Your Search Results
        </h2>
        <div className="flex justify-start items-center w-full h-auto border-b-2 bg-slate-100 rounded-xl p-5">
          <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-lg ring ring-[#FD7E14] mr-5">
            <img
              src={Pic}
              alt="pic"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-[#FD7E14] font-primary font-semibold text-xl">
              Barsha Saha
            </h2>
            <h2 className="text-[#FD7E14] font-primary text-md ">
              011211000
            </h2>
            <h2 className="text-[#FD7E14] font-primary text-md ">
              Student
            </h2>
            <h2 className="text-[#FD7E14] font-primary text-md ">
              bs@bscse.uiu.ac.bd
            </h2>
            <button className="bg-[#FD7E14] text-white font-primary font-bold text-md px-5 py-2 rounded-xl mt-5">Block This Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
