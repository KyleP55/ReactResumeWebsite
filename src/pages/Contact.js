import { useRef } from "react";
import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";

import submitButton from "../images/SubmitButton.svg"
import emailjs from "@emailjs/browser";

function Contact({ activePage, onClick }) {
    const form = useRef();
    function sendForm(e) {
        e.preventDefault();

        emailjs.sendForm('service_gyeglja', 'template_27r76iq', form.current, { publicKey: 'hHrJJIMaIXTDC3d2-' });
    }

    return (<div className='row flex-row-reverse headMarg'>
        <div className='col-xl-9 col-lg-8 col-md-12 pageContent'>
            <PagesGroup activePage={activePage} onClick={onClick} />
            <div className="row pageInfo">
                <div className="formContainer">
                    <form ref={form} onSubmit={sendForm}>
                        <div className="textDiv">
                            <p>I am always open to <b>new projects</b>, <b>opportunities</b> and other stuff.</p>
                        </div>

                        <label className="labelText">Name:</label>
                        <input type="text" className="inputLayout" name="name" />

                        <label className="labelText">Email:</label>
                        <input type="text" className="inputLayout" name="email_from" />

                        <label className="labelText">Message:</label>
                        <input type="text" className="inputLayout" name="message" />


                        <button type="submit" className="submitButton">
                            <img src={submitButton} className="subButtonSVG" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <Profile />
    </div >);
}

export default Contact;