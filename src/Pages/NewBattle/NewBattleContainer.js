import React from "react";
import NewBattlePresenter from "./NewBattlePresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      createBy: null,
      round: null,
      startDate: null,
      startTime: null,
      error: null,
      loading: true,
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, createBy, round, startDate } = this.state;
    const { push } = this.props.history;
    try {
      await axios({
        method: "post",
        url: "/createBattle",
        data: {
          title,
          createBy,
          round,
          startDate,
        },
      });
      push("/");
    } catch (e) {
      console.log(e);
    } finally {
      push("/");
    }
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  componentDidMount() {
    try {
      const { authenticate } = this.props;
      authenticate || this.props.history.push("/");
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { error, loading } = this.state;
    return (
      <NewBattlePresenter
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        error={error}
        loading={loading}
      />
    );
  }
}
