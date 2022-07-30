import { combineReducers } from "@reduxjs/toolkit";

import posts from "./posts";
import comments from "./commentsSlice";

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
