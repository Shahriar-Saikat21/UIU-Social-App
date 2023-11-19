import Pic from "../assets/DemoPic2.jpg";

const ReceiveMgs = () => {
  return (
    <div className="flex items-center justify-start w-auto h-auto p-3 mb-2 gap-2 bg-slate-100 rounded-lg shadow-lg">
      <img
        src={Pic}
        alt="pic"
        className="w-8 h-8 ml-2 rounded-full ring ring-[#FD7E14]"
      />
      <h3 className="text-lg font-primary">Lorem ipsum dolor sit amet.</h3>
    </div>
  );
};

export default ReceiveMgs;
