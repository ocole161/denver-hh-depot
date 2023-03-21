import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';



function MapAll({ specials }) {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 39.73715,
    lng: -104.989174
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >

        {specials.map(special => {
          return (
            <Marker 
              key={special.id}
              position={{
                lat: parseFloat(special.lat),
                lng: parseFloat(special.lng)
              }}
              title={special.location_name}
            />
          )}
        )}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapAll)