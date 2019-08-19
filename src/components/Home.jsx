import * as React from "react";
import { Link } from "react-router-dom";

import PhotoGrid from "./PhotoGrid";

import styles from "../styles/main.module.styl";

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.heading}>
        <h1>
          <Link to="/">Picstagram</Link>
        </h1>
        <PhotoGrid />
      </div>
    );
  }
}
