import React, { useState } from 'react';
import { FaGoogle, FaCalendarAlt, FaCloud, FaMapMarkedAlt } from 'react-icons/fa'; // Import more icons as needed
import { AiOutlineYoutube, AiOutlineMessage } from 'react-icons/ai';
import { SiRazorpay, SiGoogleanalytics, SiGooglesheets, SiGooglemaps } from 'react-icons/si';
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import './ApiDashboard.css'; // Custom CSS for additional styling


const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

// Add your Client ID here ⬇️
const clientId = "9f730851-ed4f-4a9e-b98f-cf19b8986c1f";

const Dashboard = () => {
  const services = [
    { name: 'Google Sign-In API', icon: <FaGoogle />, description: 'Secure login using Google Sign-In.' },
    { name: 'Google Calender API', icon: <FaCalendarAlt />, description: 'Integrate with Google Calendar.' },
    { name: 'Google Drive API', icon: <FaGoogle />, description: 'Access Google Drive.' },
    { name: 'Google Sheets API', icon: <SiGooglesheets />, description: 'Manage Google Sheets.' },
    { name: 'Google YouTube Data API', icon: <AiOutlineYoutube />, description: 'Access YouTube data.' },
    { name: 'Google Analytics API', icon: <SiGoogleanalytics />, description: 'Track and analyze traffic.' },
    { name: 'Google reCAPTCHA API', icon: <FaGoogle />, description: 'Protect from bots.' },
    { name: 'Google embedded map', icon: <SiGooglemaps />, description: 'Integrate maps into apps.' },
    { name: 'Text Translation API', icon: <FaGoogle />, description: 'Translate text easily.' },
    { name: 'MapMyIndia API', icon: <FaMapMarkedAlt />, description: 'Maps for India.' },
    { name: 'OpenWeatherMap', icon: <FaCloud />, description: 'Weather data from OpenWeatherMap.' },
    { name: 'Dialogflow (Google)', icon: <FaGoogle />, description: 'Natural language processing.' },
    { name: 'Chat Application', icon: <AiOutlineMessage />, description: 'Chat app integration.' },
    { name: 'LandBot (Starter Plan)', icon: <AiOutlineMessage />, description: 'Create chatbots.' },
    { name: 'Watsapp redirection API', icon: <AiOutlineMessage />, description: 'Redirect to WhatsApp.' },
    { name: 'Otp-Login Api', icon: <FaGoogle />, description: 'Login using OTP.' },
    { name: 'Payment gateway (Razorpay)', icon: <SiRazorpay />, description: 'Razorpay payment gateway.' }
  ];

  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  // Function to toggle chatbot visibility
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <style>{style}</style>
      <div className="container mt-5">
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-md-4 col-sm-6 col-xs-12 mb-4"
              key={index}
              onClick={service.name === 'Botpress' ? toggleWebchat : null} // Trigger the chatbot when 'Botpress' card is clicked
            >
              <div className="card h-100">
                <div className="card-body ">
                  <div className="icon mb-3 align-items-center">{service.icon}</div>
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botpress Webchat - it will only display if 'isWebchatOpen' is true */}
      <WebchatProvider theme={theme} client={client}>
        <div
          className={`webchat-container ${isWebchatOpen ? 'open' : 'closed'}`}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
};

export default Dashboard;
