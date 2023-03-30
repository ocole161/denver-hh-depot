import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function MapSingle({ special }) {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  const { lat, lng, location_name } = special
  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`
  })

  if (lat && lng && isLoaded) {
    return(
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          align="center"
        >
          <Marker
            position={center}
            title={location_name}
          />
          <></>
        </GoogleMap>
      </div>
    )
  } else { return <></> }
}

export default MapSingle