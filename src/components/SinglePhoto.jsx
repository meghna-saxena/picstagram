import * as React from "react";

import Header from "./Header";
import Photo from "./Photo";
import Comments from "./Comments";

export default class SinglePhoto extends React.Component {
  render() {
    console.log('PROPSSS', this.props)
    const { posts } = this.props.location.state;
    const { postId } = this.props.match.params;

   
    const index = posts.findIndex(post => post.code === postId);
    const post = posts[index];

    return (
      <React.Fragment>
        <Header />
        <div className="single-photo">
          <Photo index={index} post={post} {...this.props} />
          <Comments {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
