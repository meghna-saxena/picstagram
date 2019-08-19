import * as React from "react";
import { Link } from "react-router-dom";

export default class Photo extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`view/${post.code}`}>
          <img className="grid-photo" src={post.display_src} alt={post.caption} />
          </Link>
        </div>
      </figure>
    );
  }
}
