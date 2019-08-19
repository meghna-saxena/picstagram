import * as React from "react";
import { connect } from "react-redux";

import Photo from "./Photo";

class PhotoGrid extends React.Component {
  render() {
    const { posts, comments } = this.props;

    return (
      <div className="photo-grid">
        {posts.map((post, i) => (
          <Photo
            index={i}
            key={i}
            post={post}
            comments={comments}
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

export default connect(mapStateToProps)(PhotoGrid);
