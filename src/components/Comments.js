import * as React from "react";

let commentForm = React.createRef();
let authorInput = React.createRef();
let commentInput = React.createRef();

const Comments = props => {
  const { postComments } = props;

  const renderComments = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { postId } = props.match.params;

    const author = authorInput.current.value;
    const comment = commentInput.current.value;
  };

  return (
    <div className="comments">
      {postComments.map((comment, i) => {
        return renderComments(comment, i);
      })}
      <form ref={commentForm} className="comment-form" onSubmit={handleSubmit}>
        <input type="text" ref={authorInput} placeholder="author" />
        <input type="text" ref={commentInput} placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
