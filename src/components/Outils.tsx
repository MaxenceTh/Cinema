import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import SimpleMap from './SimpleMap';

const options = [
    { value: 'BRETAGNE', label: 'BRETAGNE' },
    { value: 'ILE-DE-FRANCE', label: 'ILE-DE-FRANCE' },
];

type OptionType = { value: string; label: string };

const Outils = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>('BRETAGNE'); // Région par défaut

    const handleChange = (newValue: SingleValue<OptionType>) => {
        if (newValue) {
            setSelectedRegion(newValue.value);
        }
    };

    return (
        <>
            {/* Passer la région sélectionnée en prop à SimpleMap */}
            <SimpleMap region={selectedRegion} />
            
            <div className="flex w-full mb-4">
                <Select options={options} onChange={handleChange} />
            </div>


        </>
    );
};

export default Outils;
