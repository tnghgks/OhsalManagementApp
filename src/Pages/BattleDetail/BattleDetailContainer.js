import React from "react";
import BattleDetailPresenter from "./BattleDetailPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      toggle: false,
      playerName: null,
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
  handleClick = () => {
    const { toggle } = this.state;
    toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true });
  };

  handleChange = ({ target }) => {
    this.setState({ playerName: target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      match: {
        params: { id },
      },
    } = this.props; //battle id
    const { playerName } = this.state;
    try {
      const result = await axios({
        method: "post",
        url: "/postAddUser",
        data: {
          id,
          playerName,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { toggle, result, error, loading } = this.state;
    return (
      <BattleDetailPresenter
        handleClick={this.handleClick}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        result={result}
        error={error}
        loading={loading}
        toggle={toggle}
      />
    );
  }
}
