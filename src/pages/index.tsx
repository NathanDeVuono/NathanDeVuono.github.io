import React from "react";

import "./base-styles.scss";

import TeaSelector, { teaTypes } from "../components/TeaSelector/TeaSelector";
import TimerModal from "../components/TimerModal/TimerModal";

export default class Index extends React.Component {
  state = {
    type: "black",
    modalVisible: false,
  };

  setTea = (type) => {
    console.log("Setting tea type: ", type);
    this.setState({ type });
  };

  startTimer = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <main>
        <h1>Tea Timer</h1>
        <h2>What kinda tea you want?</h2>
        <TeaSelector setTea={this.setTea} selectedTea={this.state.type} />
        <h2>Brewing Time:</h2>
        <p>{teaTypes[this.state.type].toFormat("m:ss")}</p>
        <button onClick={this.startTimer}>Go!</button>
        {this.state.modalVisible && (
          <TimerModal
            time={teaTypes[this.state.type]}
            closeModal={this.closeModal}
          />
        )}
      </main>
    );
  }
}
