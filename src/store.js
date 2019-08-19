import { createStore, applyMiddleware } from "redux";
// Logger with default options
import logger from "redux-logger";
import rootReducer from "./reducers";

// import comments from "./data/comments";
// import posts from "./data/posts";

// // create an object for default state
// const initialState = {
//   posts,
//   comments
// };

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger));
  return store;
}
