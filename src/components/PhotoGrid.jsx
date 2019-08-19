import * as React from "react";
import { connect } from "react-redux";

import Photo from "./Photo";
import { increment } from "../actions/actions";

class PhotoGrid extends React.Component {
  render() {
    const { posts, comments, increment } = this.props;

    return (
      <div className="photo-grid">
        {posts.map((post, i) => (
          <Photo
            index={i}
            key={i}
            post={post}
            comments={comments}
            increment={increment}
            {...this.props}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => ({
  increment: index => dispatch(increment(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);
