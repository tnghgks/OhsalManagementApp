import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyled";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: false,
    };
  }

  handleLogin = async (id, passwd) => {
    const { data } = await axios({
      method: "post",
      url: "/postLogin",
      data: {
        id: id,
        passwd: passwd,
      },
    });
    this.setState({ authenticate: data });
  };

  handleLogout = () => {
    this.setState({ authenticate: false });
  };

  render() {
    const { authenticate } = this.state;
    return (
      <>
        <Router
          authenticate={authenticate}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
