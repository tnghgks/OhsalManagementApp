import React from "react";
import BattlePresenter from "./BattlePresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }
  async componentDidMount() {
    try {
      const { data: result } = await axios.get("/getBattle");
      this.setState({ result });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <BattlePresenter result={result} error={error} loading={loading} />;
  }
}
