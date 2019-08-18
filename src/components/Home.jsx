import * as React from "react";
import { Link } from "react-router-dom";

import PhotoGrid from './PhotoGrid'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Picstagram</Link>
        </h1>
        <PhotoGrid />
      </div>
    );
  }
}
