// import React, { useState } from 'react';
// import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
// import './ChatBot.css'; // Custom CSS if needed

// const { theme, style } = buildTheme({
//     themeName: "prism",
//     themeColor: "#634433",
// });

// // Add your Client ID here ⬇️
// const clientId = "9f730851-ed4f-4a9e-b98f-cf19b8986c1f";

// const ChatBot = () => {
//     const client = getClient({ clientId });
//     const [isWebchatOpen, setIsWebchatOpen] = useState(true); // Always keep the chatbot open

//     return (
//         <div style={{ width: "100vw", height: "100vh" }}>
//             <style>{style}</style>

//             {/* Centered Heading */}
//             <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
//                 <h1 className="text-center mb-5">Integration of Chatbot</h1>

//                 {/* Botpress Webchat */}
//                 <WebchatProvider theme={theme} client={client}>
//                     <div className="webchat-container open">
//                         <Webchat />
//                     </div>
//                 </WebchatProvider>
//             </div>
//         </div>
//     );
// }

// export default ChatBot

import React, { useEffect } from 'react';
import './ChatBot.css'; // Custom CSS if needed

const ChatBot = () => {

  useEffect(() => {
    // Dynamically add the MapmyIndia script to the document
    const script = document.createElement('script');
    script.src = "https://apis.mapmyindia.com/advancedmaps/v1/455a707de3e4b047852c10be8efd0fff/map_load?v=1.5";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Centered Heading */}
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
        <h1 className="text-center mb-5"> ChatBot Integration</h1>

        {/* Map Container */}
        <div id="map" style={{ width: '100%', height: '80vh' }}></div>
      </div>
    </div>
  );
};

export default ChatBot;
