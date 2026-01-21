import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyAzA96msD3NuuOv8Jk8QDBsjKC8eYO_opU">
            <GoogleMap
                mapContainerStyle={{ height: '300%', width: '300%' }}
                center={{ lat: 30.423210167295583, lng: -9.626518599999999 }} // Your coordinates
                zoom={10}
            >
                <Marker position={{ lat: 30.423210167295583, lng: -9.626518599999999 }} /> {/* Marker at the given coordinates */}
            </GoogleMap>
        </LoadScript>
    );
}
