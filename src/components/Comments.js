import * as React from "react";
import { connect } from "react-redux";

import { addComment, removeComment } from "../actions/actions";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.commentForm = React.createRef();
    this.authorInput = React.createRef();
    this.commentInput = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { postId } = this.props.match.params;

    const author = this.authorInput.current.value;
    const comment = this.commentInput.current.value;

    this.props.addComment(postId, author, comment);
    this.commentForm.current.reset();
  };

  handleRemoveComment = index => {
    const { postId } = this.props.match.params;
    this.props.removeComment(index, postId);
  };

  renderComments = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong> {comment.text}
          <button className="remove-comment" onClick={this.handleRemoveComment}>
            &times;
          </button>
        </p>
      </div>
    );
  };

  render() {
    const { comments } = this.props;
    const { postId } = this.props.match.params;

    const postComments = comments[postId] || [];

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

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: (postId, author, comment) =>
    dispatch(addComment(postId, author, comment)),
  removeComment: (index, postId) => dispatch(removeComment(index, postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
