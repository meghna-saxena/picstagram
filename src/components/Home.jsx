import * as React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Picstagram</Link>
        </h1>
      </div>
    );
  }
}
