import * as React from 'react';

class Timer extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.isOn !== state.isOn) {
      return {
        ...state,
        isOn: props.isOn,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '00',
      isOn: false,
    };
    this.intervalHandle;
    this.fromTime = this.props.fromTime || Date.now();

    this.secondsToCount = this.props.secondsToCount
      ? this.props.secondsToCount
      : this.props.toTime - this.fromTime;
    this.secondsToCount = Math.round(this.secondsToCount / 1000);
  }

  componentDidMount = () => {
    let minutes = Math.floor(this.secondsToCount / 60);
    let seconds = this.secondsToCount - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    this.setState({
      seconds,
      minutes,
      isOn: this.props.isOn,
    });

    this.startCountDown();
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalHandle);
  };

  tick = () => {
    const min = Math.floor(this.secondsToCount / 60);
    const sec = this.secondsToCount - min * 60;

    this.setState({
      ...this.state,
      minutes: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState({
        seconds: `0${sec}`,
      });
    }

    if (min < 10) {
      this.setState({
        minutes: `0${min}`,
      });
    }

    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
      this.props.stopTimer();
    }

    this.secondsToCount -= 1;
  };

  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 1000);
  };

  render() {
    if (!this.state.isOn) return null;
    return (
      <>
        <p>
          Time left: {this.state.minutes}:{this.state.seconds}
        </p>
      </>
    );
  }
}

export default Timer;
