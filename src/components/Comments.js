import * as React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.commentForm = React.createRef();
    this.authorInput = React.createRef();
    this.commentInput = React.createRef();
  }

  renderComments = (comment, i) => {
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

  handleSubmit = e => {
    e.preventDefault();
    const { postId } = this.props.match.params;

    const author = this.authorInput.current.value;
    const comment = this.commentInput.current.value;
  };

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map((comment, i) => {
          return this.renderComments(comment, i);
        })}
        <form
          ref={this.commentForm}
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref={this.authorInput} placeholder="author" />
          <input type="text" ref={this.commentInput} placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
