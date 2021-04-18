import React from 'react';

class Weather extends React.Component{
	render() {
		return (
			<div className = 'weather info'>
				{
					this.props.city && this.props.country && 
					<p>
						<span className="value-title">Location:</span>
						<span className='weather_value'> {this.props.city},  {this.props.country}</span>
					</p>
				}
				{
					this.props.temperature && 
					<p>
						<span className="value-title">Temperature:</span>
						<span className='weather_value'> {this.props.temperature} </span> 
					</p>
				}
				{
					this.props.humidity && 
					<p>
						<span className="value-title">Humidity:</span>
						<span className='weather_value'> {this.props.humidity} </span> 
					</p>
				}
				{
					this.props.description && 
					<p>
						<span className="value-title">Conditions:</span>
						<span className='weather_value'> {this.props.description} </span> 
					</p>
				}
				{
					this.props.icon && 
					<p>
						<span className='weather_value'> <img src={"https://openweathermap.org/img/wn/" + this.props.icon + "@2x.png"} alt="img" /> </span>
					</p>
				}
				{this.props.error && <p className='weather_value'>{this.props.error}</p>}
			</div>
		)
	}
}

export default Weather;
