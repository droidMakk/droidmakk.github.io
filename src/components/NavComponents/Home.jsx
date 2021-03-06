import React, { Component } from 'react';
import './Home.css'
import AnimationComponent from '../common/AnimationComponent';

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var timer = null;
class Home extends Component {

    
    constructor(){
        super();
        this.state = { 
            hours: (new Date().getHours() > 12) ? new Date().getHours()-12 : new Date().getHours() , 
            minutes: new Date().getMinutes(), 
            seconds: new Date().getSeconds(),
            meridian: (new Date().getHours() > 12) ? 'PM' : 'AM',
            date: (new Date()).getDate(),
            day: days[(new Date()).getDay()],
            year: (new Date()).getFullYear()
        };
    }

    componentDidMount(){

        timer = setInterval(() => {
            var dt = new Date();
            this.setState({
              hours:
                dt.getHours() > 12
                  ? dt.getHours() - 12
                  : new Date().getHours(),
              minutes: dt.getMinutes(),
              seconds: dt.getSeconds(),
              meridian: dt.getHours() > 12 ? "PM" : "AM",
              date: dt.getDate(),
              day: days[dt.getDay()],
              year: dt.getFullYear()
            });
        },1000);
    }

    
    componentWillUnmount() {
        clearInterval(timer);
    }
    
    

  render() {
    return(
        <AnimationComponent>
            <div className="holder">    
                <p className="time">{this.state.hours}:{this.state.minutes}:{this.state.seconds} {this.state.meridian}</p>
                <hr />
                <p className="date">{this.state.date} - {this.state.day}, {this.state.year}</p>
                <p className="time-quote">Everything comes to you at the right. <span>Be <b>Patient</b></span></p>
            </div>
        </AnimationComponent>
    )  
  }
}

export { Home };
