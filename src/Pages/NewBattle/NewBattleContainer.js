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
    await axios({
      method: "post",
      url: "/newBattle",
      data: {
        title,
        createBy,
        round,
        startDate,
      },
    });
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
