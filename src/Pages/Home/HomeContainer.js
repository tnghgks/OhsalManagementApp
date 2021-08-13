import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
    };
  }
  componentDidMount() {
    try {
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { error, loading } = this.state;
    return <HomePresenter error={error} loading={loading} />;
  }
}
