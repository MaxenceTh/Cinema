import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Définition du type Cinema
interface Cinema {
    id: number;
    nom: string;
    latitude: number;
    longitude: number;
}

// Définition des props attendues
interface SimpleMapProps {
    region: string;
}

const SimpleMap = ({ region }: SimpleMapProps) => {
    
    const mapRef = useRef(null);
    const latitude = 48.0047647109243;
    const longitude = -4.091081280049094;

    const [cinemas, setCinemas] = useState<Cinema[]>([]);

    useEffect(() => {
        if (region) {
            const baseURL = `http://localhost:8080/cinemas/region?region=${region}`;
            
            axios.get(baseURL)
                .then((response) => {
                    setCinemas(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des cinémas :", error);
                });
        }
    }, [region]); // Met à jour les cinémas lorsque la région change

    return (
        <MapContainer center={[latitude, longitude]} zoom={7} ref={mapRef} style={{ height: "70vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Ajout dynamique des markers */}
            {cinemas.map((cinema) => (
                <Marker key={cinema.id} position={[cinema.latitude, cinema.longitude]}>
                    <Popup>
                        <strong>{cinema.nom}</strong>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default SimpleMap;
