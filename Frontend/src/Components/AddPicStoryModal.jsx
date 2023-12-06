import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadStory = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/addPostWithPic",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to upload story or network problems");
  }
};

const useUploadStory = () => {
  return useMutation(UploadStory, {
    onSuccess: (data) => {
      alert(data.message);     
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
    },
  });
};

const AddPicStoryModal = ({ isVisible, onClose }) => {

  const [image, setImage] = useState();
  const [storyBody, setStoryBody] = useState("");
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useUploadStory();

  const submit = (e) => {
    e.preventDefault();
    const newsdata = { storyBody, image };
    newsdata.storyBody = storyBody;
    newsdata.image = image;
    mutate(newsdata);
    onClose();
    navigate("/profile");
  };

    const handle = (e) => {
        if(e.target.id === "wrapper")
            onClose();
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
          Add a picture
        </h1>
        <form className="w-full" onSubmit={submit}>
        <textarea
          name="storyBody"
          cols="30"
          rows="3"
          required
          className="p-3 border-2 border-[#adadad] rounded-lg w-full mb-5 focus:outline-none"
          placeholder="Write a story..."
          onChange={(e) => {
            setStoryBody(e.target.value);
          }}
        ></textarea>
          <input
            type="file"
            placeholder="Upload a picture"
            accept=".png, .jpg, .jpeg"
            required
            className="border-2 border-[#FD7E14] rounded-md p-2 w-full focus:outline-none"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Post
            </button>
            <button className="btn inline-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPicStoryModal;

