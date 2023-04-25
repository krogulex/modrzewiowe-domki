/* import css from "./Map.module.css";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Map is loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName={css.mapContainer}
    >
    </GoogleMap>
  );
};
 */