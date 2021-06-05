import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { DataProvider, DataContext } from '../Contexts/dataContext';
import PropTypes from 'prop-types';

const Bar = (props) => {
    const [isWeightHeight, setWeightHeight] = useContext(DataContext)

    let data1 = { ...isWeightHeight };
    Object.size = function (obj) {
        var size = 0;
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    }
    var sizeObj = Object.size(data1);
    let dateArray = [];
    let bmiArray = [];
    if (sizeObj > 1) {
        for (let i = 0; i < sizeObj; i++) {
            if (data1[i].date !== null && data1[i] !== undefined) {
                console.log(data1[i].date)
                console.log(data1[i].bmi)
                dateArray.push(data1[i].date)

                bmiArray.push(data1[i].bmi)


            }
        }

    }
    // console.log(dateArray)
    // console.log(bmiArray)
    const data = canvas => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(63, 81, 181, 700);
        gradient.addColorStop(0, '#929dd9');
        // gradient.addColorStop(0, '#FF0000');
        gradient.addColorStop(1, '#172b4d');

        return {
            labels: dateArray,
            datasets: [
                {
                    label: 'BMI',
                    data: bmiArray,
                    backgroundColor: gradient,
                    borderColor: '#3F51B5',
                    // borderColor: '#FF0000',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBorderColor: 'white',
                    pointHoverBorderWidth: 2
                }
            ]
        };
    };

    const options = {
        responsive: true,
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontSize: 18,
                        fontColor: 'white'
                    },
                    gridLines: {
                        display: false,
                        color: 'white'
                    },
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16,
                        beginAtZero: true
                    }
                }
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'BMI',
                        fontSize: 18,
                        fontColor: 'white'
                    },
                    gridLines: {
                        display: false,
                        color: 'white'
                    },
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16,
                        beginAtZero: true
                    }
                }
            ]
        },
        tooltips: {
            titleFontSize: 20,
            bodyFontSize: 20
        }
    };

    return (
        <>
            <DataProvider>
                <Line style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }} data={data} options={options} />
            </DataProvider>
        </>
    );
};
Bar.propTypes = {
    labelData: PropTypes.array,
    bmiData: PropTypes.array
};

export default Bar;