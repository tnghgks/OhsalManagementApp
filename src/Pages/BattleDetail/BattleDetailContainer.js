import React from "react";
import BattleDetailPresenter from "./BattleDetailPresenter";
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
      const {
        match: {
          params: { id },
        },
      } = this.props;
      const { data: result } = await axios({
        method: "get",
        url: `/battleDetail/${id}`,
      });
      this.setState({ result: result[0] });
    } catch (error) {
      this.setState({ error: "Error 가 발생하였습니다." });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return (
      <BattleDetailPresenter result={result} error={error} loading={loading} />
    );
  }
}
