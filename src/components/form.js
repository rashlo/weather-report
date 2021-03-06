import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.loadWeather}>
              <input type="text" name="city" autoComplete="off" placeholder="City..." />
              <input type="text" name="country" autoComplete="off" placeholder="Country..." />
              <button id='submit'>Get Weather</button>
            </form>  
        )
    }
}

export default Form;
