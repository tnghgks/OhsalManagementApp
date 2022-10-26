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
        id,
        passwd,
      },
    });
    this.setState({ authenticate: data });
  };

  handleLogout = async () => {
    const result = await axios({ method: "get", url: "/getLogout" });
    console.log(result);
    this.setState({ authenticate: false });
  };
  async componentDidMount() {
    const { data } = await axios({
      method: "get",
      url: "/getLoginCheck",
    });

    this.setState({ authenticate: data });
  }

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
