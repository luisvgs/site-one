import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.479616693795492,
      lng: -66.96143254601765,
    },
    zoom: 10,
  };

  return (
    <div style={{ height: "60vh", width: "35vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="Sitio Uno"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
