import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Chart from '../Chart/Chart';
import './Monthlycycle.css'

export default function MonthlyCycle() {
const  billers = useSelector(state => state)
const [series, setSeries] = useState([]);
const [selectedYear, setSelectedYear] = useState("2021")

useEffect(() => {
    generateGraphData()
}, [billers,selectedYear])
const generateGraphData = () => {
    let seriesList = [0,0,0,0,0,0,0,0,0,0,0,0];
    billers.forEach(bill => {
        let date = bill.date;
        let year = date.split('-')[2];
        let month = parseInt(date.split('-')[0]);
        let day = date.split('-')[1];
        if(year === selectedYear)
        seriesList[month-1] += parseInt(bill.amount)
    });
    setSeries(seriesList);
}
const handleYearChange = (event) => {
    
    setSelectedYear(event.target.value);
    
    generateGraphData();
}
return (
    <div className="p-1 flex-column">
        <div className="d-flex justify-content-center text-center my-1">
            <div className="my-2 d-flex justify-content-center text-center" style={{width:'100%'}}> 
                <p className="m-0 p-0 pt-1 mx-2" style={{fontSize: '16px', color:'white'}}>Select Year: </p>
                <select id="add-biller-category" className="add-biller-category" value={selectedYear} onChange={handleYearChange}>
                 
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2021">2021</option>
                   
                </select>
            </div>
        </div>
        <Chart style={{color:'black'}} series={series} year={selectedYear}></Chart>
    </div>
)
}
