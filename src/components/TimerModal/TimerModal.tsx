import React, { MouseEventHandler } from "react";
import { Duration } from "luxon";

import * as styles from "./TimerModal.module.scss";

import ding from "./ding.mp3";

interface TimerModalProps {
  time: Duration;
  closeModal: MouseEventHandler;
}

export default class TimerModal extends React.Component<TimerModalProps, {}> {
  timer: NodeJS.Timeout;
  ding = new Audio(ding);

  state = {
    remaining: 0,
  };

  componentDidMount() {
    this.setState({
      remaining: Duration.fromMillis(this.props.time.toMillis(), undefined),
    });
    this.startTimer();
    console.log(ding);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.state.remaining !== 0) {
        this.setState({ remaining: this.state.remaining - 1000 });
      } else {
        clearInterval(this.timer);
        this.ding.play();
      }
    }, 1000);
  }

  render() {
    return (
      <div className={styles.backdrop} onClick={this.props.closeModal}>
        container{" "}
        <div className={styles.modal}>
          countdown:{" "}
          {Duration.fromMillis(this.state.remaining, undefined).toFormat(
            "m:ss"
          )}
          <button
            onClick={() => {
              this.ding.play();
            }}
          >
            test
          </button>
        </div>
      </div>
    );
  }
}
