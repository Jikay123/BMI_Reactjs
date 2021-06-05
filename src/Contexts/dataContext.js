import React, { useState, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [isWeightHeight, setWeightHeight] = useState([{
        height: null,
        weight: null,
        bmi: null,
        date: null,
    }])


    return (
        <DataContext.Provider value={[isWeightHeight, setWeightHeight]}>
            {props.children}
        </DataContext.Provider>
    );
}
