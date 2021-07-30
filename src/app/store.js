import { configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
import login from "features/Login/loginSlice";
import blog from "features/Blog/blogSlice";
import exam from "features/Exam/examSlice";
import video from "features/Video/videoSlice";
import user from "features/User/userSlice";

const rootReducer = {
  global,
  login,
  blog,
  exam,
  video,
  user,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
