import Input from 'components/Inputs/Input';

import { PropertyFeatures } from 'interfaces/Properties';
import queryString from 'query-string';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { getStorage, setStorage } from 'services/localStorage.service';

interface FiltersInterface {
    onSearch: (e: PropertyFeatures) => void;
    filterByFeature: PropertyFeatures;
}

const STORAGE_KEY: string = 'filterOpenToggle';

const Filters: React.FC<FiltersInterface> = ({ onSearch, filterByFeature }) => {
    const [filter, setFilter] = useState<boolean>();
    const [petFriendly, setPetFriendly] = useState<
        PropertyFeatures | any | boolean
    >(false);
    const [hasParking, setHasParking] = useState<
        PropertyFeatures | any | boolean
    >(false);
    const [minPrice, setMinPrice] = useState<PropertyFeatures | any | string>(
        ''
    );
    const [maxPrice, setMaxPrice] = useState<PropertyFeatures | any | string>(
        ''
    );

    const toggleFilter = () => {
        setFilter(!filter);
    };

    const onInputChangeMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setMinPrice(e.target.value);
    };
    const onInputChangeMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(e.target.value);
    };

    const handleSearch = () => {
        onSearch({
            petFriendly,
            hasParking,
            minPrice,
            maxPrice,
        });
    };

    const clearFilter = () => {
        const {
            petFriendly: petFriendlyAlias,
            hasParking: hasParkingAlias,
            minPrice: minPriceAlias,
            maxPrice: maxPriceAlias,
        } = queryString.parse(window.location.search);

        setHasParking(hasParkingAlias === hasParking);
        setPetFriendly(petFriendlyAlias === petFriendly);
        setMinPrice(minPriceAlias === minPrice);
        setMaxPrice(maxPriceAlias === maxPrice);
    };

    useEffect(() => {
        const {
            petFriendly: petFriendlyAlias,
            hasParking: hasParkingAlias,
            minPrice: minPriceAlias,
            maxPrice: maxPriceAlias,
        } = queryString.parse(window.location.search);

        setPetFriendly(petFriendlyAlias === 'true');
        setHasParking(hasParkingAlias === 'true');
        setMinPrice(minPriceAlias || '');
        setMaxPrice(maxPriceAlias || '');
    }, [filter]);

    useEffect(() => {
        getStorage(STORAGE_KEY, setFilter);
    }, []);

    useEffect(() => {
        setStorage(STORAGE_KEY, filter);
    }, [filter]);

    return (
        <React.Fragment>
            <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md items-center">
                <button className="btn" onClick={() => toggleFilter()}>
                    Filters
                </button>
                {filter ? (
                    <React.Fragment>
                        <div className={'flex fader flex-col px-5'}>
                            <div>
                                <label className="cursor-pointer">
                                    <input
                                        type={'checkbox'}
                                        checked={hasParking}
                                        onChange={() =>
                                            setHasParking(
                                                (value: boolean) => !value
                                            )
                                        }
                                    />
                                    <span className="pl-2">Has parking</span>
                                </label>
                            </div>
                            <div>
                                <label className="cursor-pointer">
                                    <input
                                        type={'checkbox'}
                                        checked={petFriendly}
                                        onChange={() =>
                                            setPetFriendly(
                                                (value: boolean) => !value
                                            )
                                        }
                                    />
                                    <span className="pl-2">Pet friendly</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-wrap items-center flex-row">
                            <div className="fader">
                                <Input
                                    type={'number'}
                                    label={'Min. price'}
                                    minPrice={minPrice}
                                    onInputChange={onInputChangeMinPrice}
                                />
                            </div>
                            <div className="fader">
                                <Input
                                    type={'number'}
                                    label={'Max.price'}
                                    minPrice={maxPrice}
                                    onInputChange={onInputChangeMaxPrice}
                                />
                            </div>
                        </div>
                        <button
                            className="btn fader"
                            onClick={() => {
                                handleSearch();
                            }}
                        >
                            Search
                        </button>
                        <button
                            className="btn fader"
                            onClick={() => {
                                clearFilter();
                            }}
                        >
                            Clear
                        </button>
                    </React.Fragment>
                ) : (
                    <React.Fragment />
                )}
            </div>
        </React.Fragment>
    );
};

export default Filters;
function useKeyPress(arg0: string) {
    throw new Error('Function not implemented.');
}
