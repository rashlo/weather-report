import React from 'react';
import Clock from './clock';

class Titles extends React.Component {
    render() {
        return (
            <div>
              <h1 className = 'title-container_title'>
                <Clock />
              </h1>
              <p className = 'title-container_subtitle'> Find weather conditions in your city </p> 
            </div>
        )
    }
}

export default Titles
