import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";

import { increment } from "../actions/actions";

class Photo extends React.Component {
  incrementLikes = () => {
    const { index, increment } = this.props;

    increment(index);
  };
  render() {
    const { post, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`view/${post.code}`}>
            <img
              className="grid-photo"
              src={post.display_src}
              alt={post.caption}
            />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={this.incrementLikes} className="likes">
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span>
                  <i className="fa fa-comments-o">
                    {comments[post.code] ? comments[post.code].length : 0}
                  </i>
                </span>
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increment: index => dispatch(increment(index))
});

export default connect(
  null,
  mapDispatchToProps
)(Photo);
