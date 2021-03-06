import React from 'react';
import './AlmaMater.css';
import { studentIcon, DataCamp, EduBanner, Udemy } from '../../assets';
import AnimationComponent from '../common/AnimationComponent';



const AlmaMater = () => {
    return(
      <AnimationComponent>
        <div className="displaydetailcard">
          <h1 className="alignRight thinText displaydetailTitle">
            <span role="img" aria-label="school">
              🏫
            </span> Alma Mater...
          </h1>
          <hr />
          <p className="courgette">
            Develop a passion for learning. if you do, you will never cease to
            grow.
          </p>
          <p className="alignRight">Anthony J. D'Angelo</p>
          <br />
          <AlmaBg />
          <p className="courgette">
            <br />
            Graduated in Electrical and Electronics Engineering From <strong>
              KIT,
            </strong> Minjur.
            <br />
            <br />
            Schooled in <strong>Velankanni</strong>,Chennai
            <br />
            <br />
            <img src={DataCamp} alt="Data Camp" className="eduicon" /> &nbsp; SQL & R from DataCamp
            <br />
            <img src={Udemy} alt="Udemy" className="eduicon" /> &nbsp; React Native Certification from Udemy
            <br />
          </p>
          <div>
            <img src={studentIcon} className="almaMaterIcon" alt="Alma Mater" />
          </div>
        </div>
      </AnimationComponent>
    );
}

const AlmaBg = () => {
  return <img src={EduBanner} className="width100 edubanner" alt="Edu Banner" />
}

export { AlmaMater };