import React, { useEffect, useState } from "react";

function AboutUs(props) {


    const [apiResult,setAPIResult]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setAPIResult(json);
        })
    },[]);

    return (
        <>
            About Us
            {apiResult==null?"":<div>
                    Id: {apiResult.id}
                    <br/>
                    Title: {apiResult.title}
                    <br/>
                </div>}
        </>
    );
}

export default AboutUs;