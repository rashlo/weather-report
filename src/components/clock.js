import React from 'react';

class Clock extends React.Component {
	state = {
		date: new Date()
	}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  
	tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock
