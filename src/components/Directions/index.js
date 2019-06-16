import React, { Component } from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="Isi dengan API Google Map "
    strokeWidth={8}
    strokeColor="#ff9800"
  />
);

export default Directions;
