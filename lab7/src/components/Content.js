import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicksNinth: 0,
      clicksTenth: 0
    };
  }

  handleNinthClick = () => {
    this.setState(prevState => ({ clicksNinth: prevState.clicksNinth + 1 }));
  };

  handleTenthClick = () => {
    this.setState(prevState => ({ clicksTenth: prevState.clicksTenth + 1 }));
  };

  getNinthStyle = () => {
    if (this.state.clicksNinth === 0) return {}; 
    return this.state.clicksNinth % 2 !== 0 
      ? { backgroundColor: 'blue', color: 'white' } 
      : { backgroundColor: 'purple', color: 'yellow' };
  };

  getTenthStyle = () => {
    if (this.state.clicksTenth === 0) return {}; 
    return this.state.clicksTenth % 2 !== 0 
      ? { backgroundColor: 'green', color: 'white' } 
      : { backgroundColor: 'orange', color: 'black' };
  };

  render() {
    return (
      <div>
        <h3>Мої хобі:</h3>
        <ul>
          <li>Музика</li>
          <li>Редагування фотографій та комп'ютерна графіка</li>
          <li>Активні види спорту</li>
        </ul>

        <h3 
          className="clickable" 
          onClick={this.handleNinthClick}
          style={this.getNinthStyle()}
        >
          Улюблені фільми:
        </h3>
        
        <ol>
          <li 
            className="clickable" 
            onClick={this.handleTenthClick}
            style={this.getTenthStyle()}
          >
            "Інтерстеллар", 2014
          </li>
          <li>"Втеча з Шоушенка", 1994</li>
          <li>"Життя і мета собаки", 2017</li>
        </ol>

        <h3>Улюблене місто - Львів</h3>
        <p>Львів - одне з найвідоміших і найкрасивіших міст України, розташоване на заході країни. Місто має багату історію та славиться своєю старовинною архітектурою. У центральній частині Львова можна побачити красиві площі, вузькі вулички, храми та історичні будівлі. Особливо популярною є площа Ринок, навколо якої розташовано багато цікавих пам’яток. Львів також відомий своїми затишними кав’ярнями, музеями, театрами та культурними заходами. Щороку сюди приїжджає багато туристів, щоб познайомитися з історією та атмосферою міста.</p>
      </div>
    );
  }
}

export default Content;