import { createStore, applyMiddleware } from "redux";
// Logger with default options
import logger from "redux-logger";
import { rootReducer } from "./reducers";

import comments from "./mockData/comments";
import posts from "./mockData/posts";

// create an object for default state
const initialState = {
  posts,
  comments
};

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

// export default function configureStore(initialState) {
//   const store = createStore(rootReducer, initialState, applyMiddleware(logger));
//   return store;
// }

export default store;