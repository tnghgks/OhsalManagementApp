import React from "react";
import CurrentEventPresenter from "./CurrentEventPresenter";
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
      const { data: result } = await axios.get("/getEvent");
      this.setState({ result });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return (
      <CurrentEventPresenter result={result} error={error} loading={loading} />
    );
  }
}
