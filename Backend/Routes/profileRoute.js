import express from 'express';
import upload from '../Middleware/uploadImage.js';
import {showProfileInfo,
  changeProfilePic,
  profileChangePassword,
  addPost,
  addPostWithPic,
  showAllStory,
  showMyStory,
  deletePost,
  searchPeople} from '../Controller/profileController.js';
import { authentication } from '../Middleware/authentication.js';

const profileRouter = express.Router();

profileRouter.get('/profileInfo',authentication, showProfileInfo);
profileRouter.put("/profileChangePassword", authentication,profileChangePassword);
profileRouter.put("/profileChangePic",authentication, upload.single("image"),changeProfilePic);
profileRouter.post("/addPost", authentication,addPost);
profileRouter.post("/addPostWithPic", authentication,upload.single("image"),addPostWithPic);
profileRouter.get("/showMyStory",authentication,showMyStory);
profileRouter.get("/showAllStory",authentication,showAllStory);
profileRouter.get("/deletePost/:id",authentication,deletePost);
profileRouter.get("/searchPeople",authentication,searchPeople);


export default profileRouter;