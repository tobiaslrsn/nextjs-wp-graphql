import React from 'react';

interface InputInterface {
    type: string;
    label: string;
    minPrice: string;
    onInputChange: (e: any) => void;
}

const Input: React.FC<InputInterface> = ({
    type,
    label,
    minPrice,
    onInputChange,
}) => {
    return (
        <React.Fragment>
            <h3>{label}</h3>
            <input
                type={type}
                value={minPrice}
                onChange={onInputChange}
                className="border-solid border-slate-400 border-2 rounded-md hover:border-slate-600"
            />
        </React.Fragment>
    );
};

export default Input;
