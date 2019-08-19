import { combineReducers } from "redux";

import posts from "./postsReducer";
import comments from "./commentsReducer";

export const rootReducer = combineReducers({ posts, comments });
