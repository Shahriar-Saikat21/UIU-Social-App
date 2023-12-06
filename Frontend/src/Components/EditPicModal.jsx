import axios from "axios";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const updatePic = async (data) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/profileChangePic",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update Picture or network problems");
  }
};

const useUploadPic = () => {
  return useMutation(updatePic, {
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
    },
  });
};

const EditPicModal = ({ isVisible, onClose }) => {
  const { mutate, isError, isLoading, error } = useUploadPic();
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    const profileImage = { image };
    profileImage.image = image;
    mutate(profileImage);
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
          Update Profile Picture
        </h1>
        <form className="w-full" onSubmit={submit}>
          <input
            type="file"
            placeholder="Upload a picture"
            required
            accept=".png, .jpg, .jpeg"
            className="border-2 border-[#FD7E14] rounded-md p-2 w-full focus:outline-none"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Update
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

export default EditPicModal;