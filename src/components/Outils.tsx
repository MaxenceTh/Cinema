import { useState, useEffect  } from 'react';
import Select, { SingleValue } from 'react-select';
import axios from 'axios';
import SimpleMap from './SimpleMap';



type OptionType = { value: string; label: string };

const Outils = () => {
    const [regions, setRegions] = useState<OptionType[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('BRETAGNE');
    
     // Récupérer les régions depuis l'API
     useEffect(() => {
        axios.get("http://localhost:8080/cinemas/listRegion")
            .then(response => {
                const regionOptions = response.data.map((region: string) => ({
                    value: region,
                    label: region
                }));
                setRegions(regionOptions);
            })
            .catch(error => console.error("Erreur lors de la récupération des régions :", error));
    }, []);

    const handleChange = (newValue: SingleValue<OptionType>) => {
        if (newValue) {
            setSelectedRegion(newValue.value);
        }
    };

    return (
        <>
            {/* Passer la région sélectionnée en prop à SimpleMap */}
            {selectedRegion && <SimpleMap region={selectedRegion} />}

            <div className="flex w-full mb-4">
            <Select options={regions} onChange={handleChange} />
            </div>


        </>
    );
};

export default Outils;
