import React from 'react';
import ReactDom from 'react-dom';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.loadWeather}>
              <input type="text" name="city" placeholder="City..." />
              <input type="text" name="country" placeholder="Country..." />
              <button id='submit'>Get Weather</button>
            </form>  

        )
    }
}
/*
ReactDom.render(
    <Form />,
    document.getElementById('root')
);
*/
export default Form;
