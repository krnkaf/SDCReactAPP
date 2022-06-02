import ContactForm from "components/ContactUs/ContactForm";
import LocationMap from "components/ContactUs/LocationMap";
import React, { useReducer, useRef } from "react";

function ContactUs(props) {

    const ref_cf=useRef(null);

    return (
        <>
            <ContactForm ref={ref_cf}/>
            <br/>
            <LocationMap/>

            <button
                onClick={e=>{
                    debugger;
                    alert(ref_cf.current.getTest());
                }}
            >Get The Test</button>

            <button
                onClick={e=>{
                   ref_cf.current.setTheTest(p=>p+1)
                }}
            >Update Child State</button>

        </>
    );
}

export default ContactUs;