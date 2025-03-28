import { useEffect } from 'react';
import headShot from '../images/HeadShot2.png';
import SocialsButton from './SocialsButton';
import ContactGroup from './ContactGroup';
import '../css/profile.css';

import PDF from "../files/kpResume.pdf";

import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';
import mobileImg from '../images/gridicons_phone.svg';
import emailImg from '../images/Email.svg';
import locationImg from '../images/Location.svg';
import download from '../images/Download.svg';

const contactInfo = [
    {
        name: "Phone",
        icon: mobileImg,
        text: "519-402-9156",
        href: "tel:+15194029156"
    },
    {
        name: "Email",
        icon: emailImg,
        text: "powelldev91@outlook.com",
        href: "mailto:powelldev91@outlook.com"
    },
    {
        name: "Location",
        icon: locationImg,
        text: "Ontario, Canada",
        href: "https://www.google.com/maps/place/Ontario/@47.324046,-105.7088943,4z/data=!3m1!4b1!4m6!3m5!1s0x4cce05b25f5113af:0x70f8425629621e09!8m2!3d51.253775!4d-85.323214!16zL20vMDVrcl8?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
    },
];

function Profile() {
    return (<div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 profileContainer">
        <div className="row profileSideMarg">
            <div className="profileBody" id="profileBody">
                <div className="profileInfoContainer">
                    <div className="mx-auto headShot">
                        <img src={headShot} className='headShotImg' />
                    </div>
                    <p className='nameText'>Kyle Powell</p>
                    <p className="descriptionText">Full-Stack Developer</p>
                    <div className="socialsContainer">
                        <SocialsButton icon={linkedinIcon} link="https://www.linkedin.com/in/kyle-p-84242731a/" />
                        <SocialsButton icon={githubIcon} link="https://github.com/KyleP55" />
                    </div>
                    <div className="profileContactContainer">
                        {contactInfo.map((i, index) => {
                            return (<ContactGroup info={i} key={index} />);
                        })}
                        <div className="flexCenter">
                            <a className="flexCenter" href={PDF} download="KylePowellResume.pdf">
                                <img
                                    src={download} className="resumeDownload"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Profile;