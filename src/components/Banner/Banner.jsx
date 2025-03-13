import React from 'react'
import './Banner.css'
import banner from '../../images/banner.png';
import myImage from "../../images/logo.png";// Go up two levels to reach 'src'
function Banner() {
  return (
    <div className='banner' /*style={{ backgroundImage: `url(${banner})` }}*/>
        <div className='content'>
          {/*<h1 className='title'>SAFESTEPS</h1>
            <h1 className='description'>SafeSteps is an innovative platform that seamlessly integrates WhatsApp with web functionalities, making communication and notifications effortless. Whether you're looking for automated alerts, real-time interactions, or a simplified user experience, SafeSteps ensures everything is just a WhatsApp message away.</h1> */}
            <h1 className='tagline'> Health & Care, Just a Chat Away! 💙</h1>
        </div>
        <img className="logoatbanner" src={myImage} alt="safesteps"  />
        <h1 style={{ fontSize: '1.5rem' , marginTop: '-70px' }} className='tagline'> Effortless Period & Maternity Tracking, Personalized Health Insights – All on WhatsApp!</h1>
        <h1 style={{ fontSize: '1rem' }} className='tagline'>SafeSteps is an innovative platform that seamlessly integrates WhatsApp with web functionalities, making communication and notifications effortless. Whether you're looking for automated alerts, real-time interactions, or a simplified user experience, SafeSteps ensures everything is just a WhatsApp message away.</h1>
        <button className="mainbutton" onClick={() => window.open("https://www.deepseek.com/")} >Get Started</button>
    </div>
  )
}

export default Banner
