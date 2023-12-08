import express from 'express';
import { authentication } from '../Middleware/authentication.js';
import {messageBoxCreate,getChatList,getChatListUser} from '../Controller/chatController.js';

const chatRouter = express.Router();

chatRouter.post("/messageBoxCreate",authentication,messageBoxCreate);
chatRouter.get("/getChatList",authentication,getChatList);
chatRouter.get("/getChatListUser",authentication,getChatListUser);

export default chatRouter;