import React from "react";
import { connect } from "react-redux";
const Something = () => {
  return <div>somethingReducer</div>;
};
//the first argument is the name of the prop
//this can be whatever we want -
//the argument after state pertains to
//the prop in our root reducer "index.js"
//this maps the sate to be accessable from props
const mapStateToProps = state => ({
  something: state.something
});

export default connect()(Something);
