import React from 'react';
import './RowPost.css';
import SexEdu from '../SexEdu/SexEdu';
import { useNavigate } from 'react-router-dom';
function RowPost() {
  const navigate = useNavigate();
  return (
    <div className="row">
       <h1 className='headline'>OUR SERVICES</h1>
       <div className="container">
          <img
            className="posterimage"
            src="https://www.femtechworld.co.uk/wp-content/uploads/2023/05/AdobeStock_504154633-1536x768.jpeg"
            alt="Poster"/>
          <div className="content">
              <h2 className="title">Period Tracking</h2>
             <p className="summary">
                Period Tracking helps individuals monitor their menstrual cycle, predict upcoming periods, and track symptoms like cramps or mood changes. A WhatsApp-integrated period tracker makes this process easier by sending reminders, predictions, and personalized health tips directly via chat.
             </p>
             <button className="learn-more">Get Started</button>
          </div>
      </div>
    <div className="container">
        <img
          className="posterimage"
          src="https://www.femtechworld.co.uk/wp-content/uploads/2023/05/AdobeStock_504154633-1536x768.jpeg"
          alt="Poster"/>
        <div className="content">
           <h2 className="title">Maternity Tracking</h2>
           <p className="summary">
            Maternity tracking helps expectant mothers monitor their pregnancy journey by providing personalized updates, health tips, and reminders. It can include due date predictions, fetal development insights, doctor appointment reminders, and postpartum care guidance. 
           </p>
           <button className="learn-more">Get Started</button>
        </div>
    </div>
       <div className="container">
         <img  
          className="posterimage"
          src="https://www.femtechworld.co.uk/wp-content/uploads/2023/05/AdobeStock_504154633-1536x768.jpeg"
          alt="Poster"
         />
        <div className="content">
          <h2 className="title">Period Tracking</h2>
          <p className="summary">
            Period Tracking helps individuals monitor their menstrual cycle, predict upcoming periods, and track symptoms like cramps or mood changes. A WhatsApp-integrated period tracker makes this process easier by sending reminders, predictions, and personalized health tips directly via chat.
          </p>
          <button className="learn-more" onClick={() => navigate('/sex-education')}>
            Go to Sex Education
          </button>
        </div>
      </div>
    </div>
  );
}

export default RowPost;