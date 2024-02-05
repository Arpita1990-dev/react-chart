import React, { Component, useEffect } from "react";
import './HomeComponent.css';
import Plot from 'react-plotly.js';

export const HomeComponent = () => {
  const data = [
    {
      employeeId: 1,
      employeeSerialId: 3,
      name: 'John Doe',
      email: 'johndoe@email.com',
      position: 'Frontend Developer',
    },
    {
      employeeId: 2,
      employeeSerialId: 2,
      name: 'Sara',
      email: 'sara@email.com',
      position: 'HR Executive',
    },
    {
      employeeId: 3,
      employeeSerialId: 4,
      name: 'Mike',
      email: 'mike@email.com',
      position: 'Backend Developer',
    },
    {
      employeeId: 4,
      employeeSerialId: 5,
      name: 'Mike123',
      email: 'mike@email.com',
      position: 'Backend Developer',
    },
  ]

  var chartData = {
    plotlydata: [{ type: 'bar', x: [1, 2, 3], y: [2, 5, 3] }],
    layout: { width: 820, height: 540, title: 'A Fancy Plot' }
  };
  const [employeeData, setEmployeeData] = React.useState(data)
  const [initialchartData, setChartDatata] = React.useState(initialBarchat);
  // const [input, setInput] = React.useState(false);
  let empid;
  let arr = [];
  let arrempId = [];
  function initialBarchat (){
    let arr = [];
    let arrempId = [];
    data.forEach(eacchdata => {
      arr.push(eacchdata.employeeId);
      arrempId.push(eacchdata.employeeSerialId);
    });
    chartData.plotlydata[0].x = arr;
    chartData.plotlydata[0].y = arrempId;

    return chartData
  }
  const onChange = (e, rowIndex) => {
   // empid = rowIndex;
    // setInput(e.target.checked);

    const index = employeeData.findIndex(x => x.employeeId == empid);
    employeeData.splice(rowIndex, 1);
    employeeData.forEach((eacchdata,index) => {
      arr.push(eacchdata.employeeId);
      arrempId.push(eacchdata.employeeSerialId);
    });
    initialchartData.plotlydata[0].x = arr;
    initialchartData.plotlydata[0].y = arrempId;
      setEmployeeData([...employeeData, employeeData]);
      setChartDatata({...initialchartData.plotlydata,plotlydata:{x:arr,y:arrempId}});   
    }

  // useEffect(() => {
  //   //setChartDatata({...chartData.plotlydata,plotlydata:{x:arr,y:arrempId}});   
  // },[]);

  return (
    <div className="container">
      {/* <span> {initialchartData.plotlydata}</span> */}
      <div id='myDiv'>
        <Plot
          data={initialchartData.plotlydata}
          layout={initialchartData.layout}
        />
      </div>
      <h1 className="title">ReactJS Editable Table</h1>
      <table>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>EmployeeSerialId</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ employeeId, name, email, position ,employeeSerialId},rowIndex) => (
            <tr key={employeeId}>
              <td > 
                <input
                  name="action"
                  type="checkbox"
                  onChange={(e) => onChange(e, rowIndex)}
                />
              </td>
              <td>
                {employeeId}
              </td>
              <td>
                {name}
              </td>
              <td>
                {email}
              </td>
              <td>
                {position}
              </td>
              <td>
                {employeeSerialId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};