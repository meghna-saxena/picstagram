import * as React from "react";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Photo = props => {
  const { index, increment, post, comments } = props;

  const incrementLikesHandler = index => {
    console.log("PHOTO PROPS", index);

    increment(index);
  };

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
          <button
            onClick={() => incrementLikesHandler(index)}
            className="likes"
          >
            &hearts; {post.likes}
          </button>
          <Link
            className="button"
            to={{
              pathname: `/view/${post.code}`,
              state: {
                posts: props.posts,
                comments: props.comments
              }
         
            }}
          >
            <span className="comment-count">
              <span>
                <i className="fa fa-comments-o">
                  {comments && comments[post.code]
                    ? comments[post.code].length
                    : 0}
                </i>
              </span>
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;