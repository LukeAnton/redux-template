import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { doAsyncSomething } from "../../actions/somethingActions";

const Something = ({ something: { something, something1 } }) => {
  return <div>somethingReducer</div>;
};

Something.propTypes = {
  something: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  something: state.something
});

export default connect(
  mapStateToProps,
  { doAsyncSomething }
)(Something);
