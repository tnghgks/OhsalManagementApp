import React from "react";
import BattleDetailPresenter from "./BattleDetailPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
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
  handleClick = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const result = await axios({
        method: "post",
        url: "/addPlayer",
        data: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { result, error, loading } = this.state;
    return (
      <BattleDetailPresenter
        handleClick={this.handleClick}
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}
