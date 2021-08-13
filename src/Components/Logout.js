import React from "react";
import { withRouter } from "react-router";
class Logout extends React.Component {
  constructor(props) {
    super(props);
    const { handleLogout, history } = this.props;
    handleLogout();
    history.push("/");
  }

  render() {
    return "";
  }
}

export default withRouter(Logout);
