import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";

import { increment } from "../actions/actions";

class Photo extends React.Component {
  handleIncrementLikes = index => {
    this.props.increment(index);
  };

  render() {
    const { index, post, comments } = this.props;
    const filteredPost = this.props.posts.find(el => el.code === post.code);

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link
            to={{
              pathname: `/view/${post.code}`,
              state: {
                posts: this.props.posts
              }
            }}
          >
            <img
              className="grid-photo"
              src={post.display_src}
              alt={post.caption}
            />
          </Link>

          {/*  <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={filteredPost.likes} className="likes-heart">
              {filteredPost.likes}
            </span>
          </CSSTransitionGroup>
       */}
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              onClick={() => this.handleIncrementLikes(index)}
              className="likes"
            >
              &hearts; {filteredPost.likes}
            </button>
            <Link
              className="button"
              to={{
                pathname: `/view/${post.code}`,
                state: {
                  posts: this.props.posts
                }
              }}
            >
              <span className="comment-count">
                <i className="fa fa-comments-o" />
                <span>
                  {comments && comments[post.code]
                    ? comments[post.code].length
                    : 0}
                </span>
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => ({
  increment: index => dispatch(increment(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
