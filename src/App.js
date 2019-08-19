import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "./actions/actions";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return <Home />;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
