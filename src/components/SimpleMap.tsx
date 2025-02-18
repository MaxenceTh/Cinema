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
    commune: string;
    multiplexe: string;
    population_commune: string;
    ecrans: string;
    fauteuils: string;
    entrees_2021: number;
    entrees_2022: number;
    evolution_entrees: number;
    adresse: string;

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
    const [selectedCinema, setSelectedCinema] = useState<Cinema | null>(null); // Stocke le cinéma sélectionné

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
        <>
            <div className="flex">
                <MapContainer center={[latitude, longitude]} zoom={7} ref={mapRef} style={{ height: "70vh", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Ajout dynamique des markers */}
                    {cinemas.map((cinema) => (
                        <Marker key={cinema.id} position={[cinema.latitude, cinema.longitude]}
                            eventHandlers={{
                                click: () => setSelectedCinema(cinema), // Met à jour l'état au clic
                            }}>
                            <Popup>
                                <p>Nom du cinéma: <strong>{cinema.nom}</strong></p>
                                <p>Multiplexe: <strong>{cinema.multiplexe}</strong></p>
                                <p>Commune: <strong>{cinema.commune}</strong></p>
                                <p>Population commune: <strong>{cinema.population_commune}</strong></p>
                                <p>Fauteuils: <strong>{cinema.fauteuils}</strong></p>
                                <p>Écrans: <strong>{cinema.ecrans}</strong></p>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {/* Affichage des infos du cinéma sélectionné */}
                {selectedCinema && (
                    <div className="text-center m-auto">
                        <h3 className="text-2xl">Informations sur le cinéma</h3>
                        <p><strong>Nom :</strong> {selectedCinema.nom}</p>
                        <p><strong>Adresse :</strong> {selectedCinema.adresse}</p>
                        <p><strong>Commune :</strong> {selectedCinema.commune}</p>
                        <p><strong>Multiplexe :</strong> {selectedCinema.multiplexe}</p>
                        <p><strong>Population de la commune :</strong> {selectedCinema.population_commune}</p>
                        <p><strong>Écrans :</strong> {selectedCinema.ecrans}</p>
                        <p><strong>Fauteuils :</strong> {selectedCinema.fauteuils}</p>
                        <p><strong>Entrées en 2021 :</strong> {selectedCinema.entrees_2021}</p>
                        <p><strong>Entrées en 2022 :</strong> {selectedCinema.entrees_2022}</p>
                        <p><strong>Évolution des entrées :</strong> {selectedCinema.evolution_entrees}%</p>
                        <p><strong>Latitude :</strong> {selectedCinema.latitude}</p>
                        <p><strong>Longitude :</strong> {selectedCinema.longitude}  </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default SimpleMap;
