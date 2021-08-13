import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleSubmit: null,
      changeState: null,
      id: null,
      passwd: null,
      error: null,
      loading: true,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {
      history: { push },
    } = this.props;
    const { id, passwd } = this.state;
    this.props.handleLogin(id, passwd);
    push("/");
  };
  handleChange = ({ target }) => {
    if (target.name === "id") {
      this.setState({ id: target.value });
    } else if (target.name === "passwd") {
      this.setState({ passwd: target.value });
    }
  };
  componentDidMount() {
    try {
    } catch (error) {
      this.setState({ error });
    } finally {
    }
  }
  render() {
    const { error, loading } = this.state;
    return (
      <LoginPresenter
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={error}
        loading={loading}
      />
    );
  }
}
