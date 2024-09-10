import React, { useEffect } from 'react';
import './MapComponent.css'; // Ensure you have this CSS file

const MapComponent = () => {
  useEffect(() => {
    const initializeMap = () => {
      if (window.MapmyIndia && window.MapmyIndia.Map) {
        try {
          new window.MapmyIndia.Map("map", {
            center: [28.61, 77.23],
            zoomControl: true,
            hybrid: true,
          });
        } catch (error) {
          console.error('Error initializing the MapmyIndia map:', error);
        }
      } else {
        console.error('MapmyIndia object or MapmyIndia.Map class not found.');
      }
    };

    // Ensure MapmyIndia script is loaded before initializing the map
    if (window.MapmyIndia && window.MapmyIndia.Map) {
      initializeMap();
    } else {
      const script = document.getElementById('mapmyindia-script');
      if (script) {
        script.onload = initializeMap;
        script.onerror = (error) => {
          console.error('Failed to load MapmyIndia script:', error);
        };
      }
    }

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  );
};

export default MapComponent;
