import * as React from "react";

import Photo from "./Photo";
import Comments from "./Comments";

export default class SinglePhoto extends React.Component {
  render() {
    const { posts, comments } = this.props.location.state;
    const { postId } = this.props.match.params;

    const index = posts.findIndex(post => post.code === postId);
    const post = posts[index];

    // const postComments = comments[postId] || [];

    // console.log('comments', comments)

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments {...this.props} />
      </div>
    );
  }
}
