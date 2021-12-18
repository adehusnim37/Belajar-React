import React from 'react';
import ContactImg from "../assets/contact.jpg"
import "../style/contact.css"

const Contact = () => {
    return (
        <div className={"contact"}>
            <div className={"leftSide"} style={{backgroundImage: `url(${ContactImg})`}}>

            </div>
            <div className={"rightSide"}>
                <h1>Contact Us</h1>
                <form id={"contact-form"} method={"POST"}>
                    <label htmlFor={"name"}>Nama</label>
                    <input name={"name"} type={"text"} placeholder={"Masukkan nama anda"}/>
                    <label htmlFor={"email"}>Email</label>
                    <input name={"email"} type={"email"} placeholder={"Masukkan Email anda"}/>
                    <label htmlFor={"message"}>Pesan</label>
                    <textarea name={"message"} placeholder={"Isi pesan anda"} rows={7}> </textarea>
                    <button type={"submit"}>SendIt</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;