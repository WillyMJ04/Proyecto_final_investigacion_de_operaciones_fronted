import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 14.634915, // Coordenadas iniciales (Guatemala, ejemplo)
  lng: -90.506882,
};

const API_KEY = 'AIzaSyAmT_JUnoisy96sw975ZLhui0fBTOMDwGU'; // Reemplaza con tu API Key de Google Maps

const MapComponent: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });

  const [selectedPosition, setSelectedPosition] = useState<google.maps.LatLngLiteral | null>(null);

  const onClickMap = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setSelectedPosition({ lat, lng });
    }
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onClickMap} // Captura clics en el mapa
      >
        {selectedPosition && <Marker position={selectedPosition} />}
      </GoogleMap>

      {selectedPosition && (
        <div>
          <h3>Coordenadas seleccionadas:</h3>
          <p>Latitud: {selectedPosition.lat}</p>
          <p>Longitud: {selectedPosition.lng}</p>
        </div>
      )}
    </div>
  ) : (
    <p>Cargando el mapa...</p>
  );
};

export default MapComponent;
