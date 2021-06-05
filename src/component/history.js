import React, { useContext } from 'react';
import { DataContext } from '../Contexts/dataContext'
import { DataProvider } from '../Contexts/dataContext'
import '../component/history.css'

export default function () {
    const [isWeightHeight, setWeightHeight] = useContext(DataContext)
    const handleClickedRemove = (event, index) => {
        let values = [...isWeightHeight];
        values.splice(index, 1);
        setWeightHeight(values);
    }
    return (
        <>
            <DataProvider>
                <div id="frameHistory">
                    <div id="itemHistory">
                        {isWeightHeight.map((value, index) =>
                        (
                            (value.height === null && value.weight === null)
                                ?
                                null
                                :
                                <div className="rowHistory">
                                    <div style={{ color: 'white', width: '100%' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <h3>{value.bmi}</h3>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative' }}>
                                            <p className="values">Height: {value.height} (cm)</p>
                                            <p className="values">Weight: {value.weight} (kg)</p>
                                            <p className="values">Date: {value.date}</p>
                                            <div id="remove" onClick={e => { handleClickedRemove(e, index) }}>X</div>
                                        </div>
                                    </div>
                                </div>


                            // console.log(value)
                        ))
                        }
                    </div>
                </div>

            </DataProvider>
        </>
    );
}