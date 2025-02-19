"use client";

    import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
    import { useMemo } from "react";
    
    interface GoogleMapProps {
        center: { lat: number; lng: number };
        zoom: number;
    }
    
    const GoogleMapComponent: React.FC<GoogleMapProps> = ({ center, zoom }) => {
        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || '',
        });
    
        const mapOptions = useMemo(
            () => ({
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            }),
            []
        );
    
        return isLoaded ? (
            <GoogleMap
                mapContainerStyle={{ width: '40%', height: '400px' }}
                center={center}
                zoom={zoom}
                options={mapOptions}
            >    
             <Marker position={center}/>
            </GoogleMap>
        ) : <div>Loading...</div>;
    };
    
    export default GoogleMapComponent;
