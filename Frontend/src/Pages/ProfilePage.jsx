import Profile from "../Components/Profile";
import StorySection from "../Components/StorySection";

const ProfilePage = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-[100vh] justify-start items-center md:max-w-[1460px] m-auto">
          <Profile />
          <div className="flex flex-col w-full h-[100vh] justify-start items-start px-[50px] md:pt-[80px] mb-5 pb-5">
            <StorySection />
          </div>
        </div>
      );
};

export default ProfilePage;