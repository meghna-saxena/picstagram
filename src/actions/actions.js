// increment
export const increment = index => {
  return {
    type: "INCREMENT_LIKES",
    index
  };
};

// add comment
export const addComment = (postId, author, comment) => {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};

// remove comment
export const removeComment = (postId, index) => {
  //index is comment's index, postId is post's id
  return {
    type: "REMOVE_COMMENT",
    index,
    postId
  };
};
