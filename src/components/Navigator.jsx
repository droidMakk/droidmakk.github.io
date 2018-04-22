import React,{ Component } from 'react';
import './component.css';
import NavCard from './common/NavCard';
import NavTogglr from './common/NavTogglr';
import { Link } from 'react-router-dom';


const resdata = [
    {'mesg': 'Who Am I?','link':'/whoami' },
    {'mesg': 'Me and Unique','link':'/meandunique' },
    {'mesg': 'Alma mater','link':'/almamater' },
    {'mesg': 'As a Dev','link':'/asadev' },
    {'mesg': 'Project Experience','link':'/projectexperience' },
    {'mesg': 'Communities','link':'/communities' },
    {'mesg': 'Social','link':'/social' },
    {'mesg': 'Dev Stack','link':'/devstack'},
    {'mesg': 'Credits','link':'/credits'},
]

class Navigator extends Component {
  closeNavigator() {
    if(window.innerWidth <= 450){
      document.getElementById("navigatorHolder").style.opacity = 0;
      setTimeout(() => {
        document.getElementById("navigatorHolder").style.display = "none";
      }, 750);
    }
  }

  render() {
    return <div className="navigatorHolder" id="navigatorHolder">
        <div className="navswitch" onClick={this.closeNavigator}>
          <NavTogglr/>
        </div>
        <div className="navigator">
          <nav className="navelement">
            {resdata.map(data => (
              <NavElement
                key={data.mesg}
                data={data}
                onClick={this.closeNavigator}
              />
            ))}
          </nav>
        </div>
      </div>;
  }
}
export default Navigator;


const NavElement = (props) => {
    const { mesg, link } = props.data;
    const { onClick } = props;
    return(
        <Link to={link}>
            <NavCard key={mesg} onClick={onClick}>
                <div>{mesg}</div>
            </NavCard>
        </Link>
    );
}
