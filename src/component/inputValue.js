import React, { useContext, useState } from 'react'
import '../App.css'
import { DataProvider, DataContext } from '../Contexts/dataContext'


export default function () {
    const [isWeightHeight, setWeightHeight] = useContext(DataContext)
    const [isHeight, setHeight] = useState(0);
    const [isWeight, setWeight] = useState(0);

    const handleHeight = (event) => {
        setHeight(event.target.value)
        console.log(isHeight, "height")
    }
    const handleWeight = (event) => {
        setWeight(event.target.value)
        console.log(isWeight, "weight")
    }

    const handleClicked = (event) => {
        // console.log(event.target.textContent)
        let size = isWeightHeight.length
        let today = new Date().toLocaleDateString()

        let bmi_result = Math.round(((Number)(isWeight * 100 * 100) / ((Number)(isHeight) * (Number)(isHeight))) * 100) / 100

        console.log(size)

        if (isHeight > 0 && isWeight > 0) {
            setWeightHeight([...isWeightHeight, {
                height: isHeight,
                weight: isWeight,
                date: today,
                bmi: bmi_result
            }])
        } else {
            window.alert("Dữ liệu nhập vào không đạt yêu cầu \nVui lòng kiểm tra lại")
        }
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        setHeight(null)
        setWeight(null)
        console.log(isWeightHeight)
        // console.log(isHeight)
        // console.log(isWeight)
        console.log(bmi_result, "BMI")
        console.log(isWeight, "isw")
        console.log(isHeight, "isH")
    }


    return (
        <>
            <DataProvider>
                <div>
                    <div className="row">
                        <div id="inputData" className="col m6 s12" >
                            <label className="labelInput" >Weight (kg)</label>
                            <input onChange={(e) => handleWeight(e)} id="weight" type="number" placeholder="50" min="1" />
                        </div>
                        <div id="inputData" className="col m6 s12">
                            <label className="labelInput" >Height (cm)</label>
                            <input id="height" onChange={(e) => handleHeight(e)} type="number" placeholder="160" min="1" />
                        </div>
                    </div>
                    <div>
                        <button onClick={(e) => handleClicked(e)} className="submit">Calculator BMI</button>
                    </div>
                </div>
            </DataProvider>

        </>
    );
}