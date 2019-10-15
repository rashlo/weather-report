import React from 'react';
import ReactDom from 'react-dom';

class Weather extends React.Component{
    render() {
        return (
            <div className = 'weather info'>
                {
                    this.props.city && this.props.country && <p>Location:
                        <span className='weather_value'> {this.props.city},  {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temperature && <p>Temperature:
                        <span className='weather_value'> {this.props.temperature} </span> 
                    </p>
                }
                {
                    this.props.humidity && <p>Humidity:
                        <span className='weather_value'> {this.props.humidity} </span> 
                    </p>
                }
                {
                    this.props.description && <p>Conditions:
                        <span className='weather_value'> {this.props.description} </span> 
                    </p>
                }
                {this.props.error && <p className='weather_value'>{this.props.error}</p>}
            </div>
        )
    }
}

ReactDom.render(
    <Weather />,
    document.getElementById('root')
);

export default Weather;