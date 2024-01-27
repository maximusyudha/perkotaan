import { useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainers = ({ project }) => {
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  return (
    <div className="h-50 w-full">
      <MapContainer
        style={{ height: "50vh" }}
        center={[-6.2, 106.816666]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=RhDViGB5hdqtAglaDjfA" />
        <Marker position={[-6.2, 106.8229]}>
          <Popup>Lokasi Pembangunan</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapContainers