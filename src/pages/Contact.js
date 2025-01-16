import { useRef, useState } from "react";
import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";
import { allCheck } from "../utility/formCheck";

import submitButton from "../images/SubmitButton.svg"
import emailjs from "@emailjs/browser";

function Contact({ activePage, onClick }) {
    const form = useRef();
    const [errMessage, setErrMessage] = useState();

    // For Validation
    function sendForm(e) {
        e.preventDefault();
        let message = null;

        message = allCheck(document.getElementById("name").value, document.getElementById("email").value, document.getElementById("message").value);

        if (message != null) {
            setErrMessage(message);
        } else {
            setErrMessage();
            alert("Message Sent!")
            emailjs.sendForm('service_gyeglja', 'template_27r76iq', form.current, { publicKey: 'hHrJJIMaIXTDC3d2-' });
        }
    }

    return (<div className='row flex-row-reverse headMarg'>
        <div className='col-xl-9 col-lg-8 col-md-12 pageContent'>
            <PagesGroup activePage={activePage} onClick={onClick} />
            <div className="row pageInfo scroll" id="pageInfo">
                <div className="formContainer">
                    <form ref={form} onSubmit={sendForm}>
                        <div className="textDiv">
                            <p>I am always open to <b>new projects</b>, <b>opportunities</b> and other stuff.</p>
                        </div>

                        <label className="labelText">Name:</label>
                        <input type="text" className="inputLayout" name="name" id="name" />

                        <label className="labelText">Email:</label>
                        <input type="text" className="inputLayout" name="email_from" id="email" />

                        <label className="labelText">Message:</label>
                        <input type="text" className="inputLayout" name="message" id="message" />


                        <button type="submit" className="submitButton">
                            <img src={submitButton} className="subButtonSVG" />
                        </button>
                        <div className="centerFlex"><h3 className="errMessage">{errMessage}</h3></div>
                    </form>
                </div>
            </div>
        </div>
        <Profile />
    </div >);
}

export default Contact;