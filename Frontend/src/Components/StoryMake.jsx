import { MdAddAPhoto } from "react-icons/md";
import AddPicStoryModal from "./AddPicStoryModal";
import { Link } from "react-router-dom";
import { useState } from "react";

const StoryMake = () => {
  const [showAddPic, setShowAddPic] = useState(false);
  return (
    <div className="flex flex-col w-full h-auto justify-center items-start border-2 border-[#FD7E14] rounded-lg p-5 shadow-xl mb-3">
      <form className="w-full">
        <textarea
          name="storyBody"
          cols="30"
          rows="3"
          className="p-3 border-2 border-[#adadad] rounded-lg w-full mb-5 focus:outline-none"
          placeholder="Write a story..."
        ></textarea>
        <img
          src=""
          alt=""
          className="h-50 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        />
        <div className="flex w-full h-9 justify-between items-center">
          <Link onClick={() => setShowAddPic(true)}>
            <MdAddAPhoto className="text-2xl text-[#FD7E14] cursor-pointer" />
          </Link>
          <button className="btnThree">Post</button>
        </div>
      </form>
      <AddPicStoryModal
        isVisible={showAddPic}
        onClose={() => {
          setShowAddPic(false);
        }}
      />
    </div>
  );
};

export default StoryMake;
