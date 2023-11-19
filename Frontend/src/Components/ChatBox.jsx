import Pic from "../assets/DemoPic2.jpg";

const ChatBox = () => {
    return (
        <div className="flex justify-start items-center w-full h-auto md:border-b-2 md:bg-slate-100 rounded-xl p-2 cursor-pointer">
          <div className="w-[50px] h-[50px] md:w-[50px] rounded-full ring ring-[#FD7E14] mr-2">
            <img
              src={Pic}
              alt="pic"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-[#FD7E14] font-primary font-semibold text-lg hidden md:block">
              Barsha Saha
            </h2>
            <h2 className="text-[#FD7E14] font-primary text-md hidden md:block">
              Hello World...
            </h2>
          </div>
        </div>
    );
};

export default ChatBox;