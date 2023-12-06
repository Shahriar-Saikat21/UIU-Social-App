import { MdAddAPhoto } from "react-icons/md";
import AddPicStoryModal from "./AddPicStoryModal";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation} from "react-query";
import axios from "axios";

const addPost = async (data) => {
  try {
      const response = await axios.post('http://localhost:3000/addPost', data,{
        withCredentials: true,
      });
      return response.data;
  } catch (error) {
      throw new Error('Failed to create account or network problems');
  }
};

const StoryMake = () => {
  const [showAddPic, setShowAddPic] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutate, isError, isLoading, error } = useMutation(addPost,{
    onSuccess: (data)=>{
      alert(data.message);
    },
    onError : (error)=>{
      alert(error.message||"An error is occured");
    }
  });
  const useSubmit = (data) => {
    mutate(data);
    reset();
  };
  return (
    <div className="flex flex-col w-full h-auto justify-center items-start border-2 border-[#FD7E14] rounded-lg p-5 shadow-xl mb-3">
      <form className="w-full" onSubmit={handleSubmit(useSubmit)}
        noValidate>
        <textarea
          name="storyBody"
          cols="30"
          rows="3"
          className="p-3 border-2 border-[#adadad] rounded-lg w-full mb-5 focus:outline-none"
          placeholder="Write a story..."
          {...register("storyBody", {
            required: {
              value: true,
              message: "Category name is required",
            },
          })}
        ></textarea>
        <p className=" mb-2 text-red-600 font-semibold">
          {errors.storyBody?.message}
        </p>
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
