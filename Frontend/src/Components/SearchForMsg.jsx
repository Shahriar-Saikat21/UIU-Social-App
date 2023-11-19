import Pic from "../assets/DemoPic2.jpg";

const SearchForMsg = ({ isVisible, onClose }) => {
  const handle = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      id="wrapper"
      onClick={handle}
      className="bg-black fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="flex flex-col items-start justify-center bg-white rounded-lg w-[600px] p-6">
        <h1 className="text-xl text-[#FD7E14] font-semibold font-primary text-center mb-4">
          Search People
        </h1>
        <form className="w-full">
          <input
            type="text"
            placeholder="Enter User Name or ID..."
            className="border-2 border-[#FD7E14] rounded-md p-2 w-full focus:outline-none mb-3"
          />
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Search
            </button>
            <button className="btn inline-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
        <div className=" flex w-full h-auto flex-col">
          <h2 className="text-2xl font-semibold font-primary text-[#FD7E14] mb-5">
            Search Result.....
          </h2>
          <div className="flex justify-between items-center w-full h-auto md:border-b-2 md:bg-slate-100 rounded-xl p-2 cursor-pointer">
            <div className="flex justify-start items-center">
              <div className="w-[50px] h-[50px] md:w-[50px] rounded-full ring ring-[#FD7E14] mr-2">
                <img
                  src={Pic}
                  alt="pic"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col ">
                <h2 className="text-[#FD7E14] font-primary font-semibold text-lg ">
                  Barsha Saha
                </h2>
                <h2 className="text-[#FD7E14] font-primary text-md ">
                  ID : 011211000
                </h2>
              </div>
            </div>
            <button className="bg-[#FD7E14] text-white font-primary  text-md px-5 py-2 rounded-xl">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForMsg;
