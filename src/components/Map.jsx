import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import marker from '/icon-location.svg';

export default function MapComp({ lng, lat }) {
  const [viewport, setViewport] = useState({
    longitude: lng,
    latitude: lat,
    zoom: 10,
  });

  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      longitude: lng,
      latitude: lat,
    }));
  }, [lng, lat]);

  return (
    <div style={{ height: '500px' }}>
      <Map
        {...viewport}
        width='100%'
        height='100%'
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxApiAccessToken='pk.eyJ1Ijoib3ViYWlkbHVtYSIsImEiOiJjbHQ1dXZyazYwNXUyMmtvMXZjeXE1Z2lzIn0.OcGQkEqa-yT01k68Gwn6dw'
      >
        <Marker longitude={lng} latitude={lat} anchor='bottom'>
          <img
            src={marker}
            style={{ width: '30px', height: 'auto' }}
            alt='Marker'
          />
        </Marker>
      </Map>
    </div>
  );
}