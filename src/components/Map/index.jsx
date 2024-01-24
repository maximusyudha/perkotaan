import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ project }) => {
    const mapStyles = {
      height: "400px",
      width: "100%",
    };
  
    const defaultCenter = {
      lat: parseFloat(project[0].latitude),
      lng: parseFloat(project[0].longitude),
    };
  
    return (
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
  };

  export default MapContainer;