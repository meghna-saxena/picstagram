import * as React from "react";
import Photo from "./Photo";

const PhotoGrid = ({ posts, comments }) => {
  return (
    <div className="photo-grid">
      {posts.map((post, i) => (
        <Photo key={i} post={post} comments={comments} />
      ))}
    </div>
  );
};

export default PhotoGrid;
