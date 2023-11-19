import Pic from "../assets/DemoProfile.jpg";

const SendMsg = () => {
  return (
    <div className="flex items-center justify-end w-full h-auto mb-2 gap-2 ">
      <div className="flex bg-slate-200 rounded-lg shadow-lg w-auto h-auto p-3">
        <h3 className="text-lg font-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, est!</h3>
        <img
          src={Pic}
          alt="pic"
          className="w-8 h-8 ml-2 rounded-full ring ring-[#FD7E14]"
        />
      </div>
    </div>
  );
};

export default SendMsg;
