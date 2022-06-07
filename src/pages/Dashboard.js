import React, { useEffect, useState } from "react";

function Dashboard(props) {

    const [studentList,setStudentList]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5001/student/getallstudent')
        .then(response => response.json())
        .then(data => {
            setStudentList(data);
        });
    },[])

    const sendData=()=>{
        var data={
            id:8,
            name:"Ramesh"
        }

        const rawResponse = fetch('http://localhost:5001/student/create', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        });
    }

    return (
        <>
            {studentList.map(m=>(<li>{m.name}</li>))}
            <br/>
            <button onClick={()=>sendData()}>Test Create API</button>
        </>
    );
}

export default Dashboard;