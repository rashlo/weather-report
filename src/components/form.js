import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.loadWeather}>
              <input type="text" name="city" autocomplete="off" placeholder="City..." />
              <input type="text" name="country" autocomplete="off" placeholder="Country..." />
              <button id='submit'>Get Weather</button>
            </form>  
        )
    }
}

export default Form;
