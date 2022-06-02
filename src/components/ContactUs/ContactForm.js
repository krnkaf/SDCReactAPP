import React, { useImperativeHandle, useState } from "react";

const ContactForm=React.forwardRef((props, ref)=>{

    const [test,setTest]=useState(0)

    useImperativeHandle(ref, () => ({
        getTest(){
            return test;
        },
        setTheTest(p){
            setTest(p)
        },
    }));

    return (
        <>
            Contact Form123
        </>
    );
})

export default ContactForm;