import GettingStart from "../Components/GettingStart";

const ProfileInfoSetPage = () => {
    return (
        <div className="flex flex-col w-full h-[100vh] justify-center items-center">
      <h1 className="text-2xl md:text-4xl text-[#FD7E14] mb-[50px] pt-4 pr-5 font-bold font-primary">
        Welcome to UIU Social App
      </h1>
      <div className="flex justify-center items-center md:mx-4 gap-3">
        <GettingStart />
      </div>
    </div>
    );
};

export default ProfileInfoSetPage;