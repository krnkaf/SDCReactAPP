import ContactForm from "components/ContactUs/ContactForm";
import LocationMap from "components/ContactUs/LocationMap";
import React from "react";

function ContactUs(props) {
    return (
        <>
            <ContactForm/>
            <br/>
            <LocationMap/>
        </>
    );
}

export default ContactUs;