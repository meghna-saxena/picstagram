import * as React from "react";
import Photo from "./Photo";

export default class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo key={i} {...this.props} />
        ))}
      </div>
    );
  }
}
