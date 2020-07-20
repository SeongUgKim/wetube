import express from "express";
import routes from "../routes";
import {
  videoDetail,
  upload,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";
import { editProfile } from "../controllers/userController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
