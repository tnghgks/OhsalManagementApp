import React from "react";
import NewBattlePresenter from "./NewBattlePresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
    };
  }
  async componentDidMount() {
    try {
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { error, loading } = this.state;
    return <NewBattlePresenter error={error} loading={loading} />;
  }
}
