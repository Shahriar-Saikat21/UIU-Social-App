import SendMsg from "./SendMsg";
import ReceiveMgs from "./ReceiveMgs";

const MessageBody = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-[100vh] md:pt-[50px] overflow-y-auto">
      <div className="flex justify-start items-center w-full h-auto p-5 gap-3 fixed border-b-2 bg-white">
        <h2 className="text-[#FD7E14] font-primary font-bold text-xl md:text-2xl">
          Barsha Saha
        </h2>
        <h3 className="text-[#FD7E14] font-primary text-lg  ">
          011211000
        </h3>
        <h3 className="text-[#FD7E14] font-primary text-lg  ">
          Student
        </h3>
      </div>
      <div className="px-5 pt-[100px] flex flex-col w-full justify-start items-start gap-2">
        <SendMsg/>
        <ReceiveMgs />
        <SendMsg/>
        <ReceiveMgs />
        <SendMsg/>
        <ReceiveMgs />
        <SendMsg/>
        <ReceiveMgs />
        <SendMsg/>
        <ReceiveMgs />
        <SendMsg/>
        <ReceiveMgs />
        <SendMsg/>
        <ReceiveMgs />
      </div>
      <div className="w-full">
        <form className="flex justify-start items-center w-full h-auto p-2 gap-3 fixed border-t-2 bg-white bottom-0 ">
          <input
            type="text"
            placeholder="Type a message...."
            className="h-[40px] md:h-[50px] border-2 border-gray-100 rounded-xl px-4 text-lg w-[1000px] focus:outline-none"
          />
          <button className="bg-[#FD7E14] text-white font-primary font-bold text-lg px-5 py-2 rounded-xl">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageBody;
