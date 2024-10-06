import React from "react";

const VisitedPlacesMap: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto" style={{ height: "500px" }}>
      {/* Embedded Map */}
      <iframe
        src="https://visitedplaces.com/view/?map=world&amp;projection=geoOrthographic&amp;theme=dark-green&amp;water=1&amp;graticule=0&amp;names=1&amp;duration=2000&amp;placeduration=100&amp;slider=0&amp;autoplay=1&amp;autozoom=none&amp;autostep=1&amp;home=US&amp;places=My%20Home~US~1_0_0_103.5_-44.7*North%20America~CA_MX~1.6_-100.6_44.4_100.6_-44.4&amp;textsize=0.9"
        title="Visited Places Map"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VisitedPlacesMap;