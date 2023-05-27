'use client';

import React, { useEffect, useState } from 'react';
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';

import classes from './Map.module.scss';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [geoJSON, setGeoJSON] = useState({});

  useEffect(() => {
    if (Object.keys(geoJSON).length === 0) {
      fetch(
        'https://nominatim.openstreetmap.org/search.php?q=Russia&polygon_geojson=1&format=geojson',
      )
        .then((res) => res.json())
        .then((json) => {
          const data = {
            type: '',
            licence: '',
            features: {},
          };
          data.type = json.type;
          data.licence = json.licence;
          data.features = json.features.filter((el) => el.geometry.type !== 'Point');
          setGeoJSON(data);
        });
    }
  });

  return (
    <div className={classes.Map}>
      <MapContainer center={[55.755825, 37.617298]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Object.keys(geoJSON).length !== 0 ? (
          <GeoJSON
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            data={geoJSON}
          />
        ) : (
          ''
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
