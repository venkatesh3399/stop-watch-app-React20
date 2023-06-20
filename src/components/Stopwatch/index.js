import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInterval: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderSeconds = () => {
    const {timeInterval} = this.state
    const seconds = Math.floor(timeInterval % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInterval} = this.state
    const minutes = Math.floor(timeInterval / 60)
    if (minutes > 10) {
      return minutes
    }
    return `0${minutes}`
  }

  onClickStart = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({timeInterval: prevState.timeInterval + 1}))
    }, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.timerId)
    this.setState({timeInterval: 0, isTimerRunning: false})
  }

  render() {
    const {isTimerRunning} = this.state
    const Timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="main-container">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="card-title-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="card-head">Timer</p>
          </div>
          <h1 className="timer">{Timer}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="btn start"
              onClick={this.onClickStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
