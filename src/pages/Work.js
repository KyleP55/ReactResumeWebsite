import { useEffect } from "react";
import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";
import $ from "jquery";

import setBodyHeight from "../utility/setBodyHeight";
import ChattyAppIcon from "../images/ChattyAppSS.png"
import DbProjectTN from "../images/dbProjectTN.png";
import RRCTN from "../images/RRCTN.png";
import GLTN from "../images/GoalListTN.png";
import MNGTN from "../images/MobileNumberGameTN.png";
import MFATN from "../images/MobileFoodAppTN.png";
import MFTN from "../images/MobileFeatsTN.png";

import WorkSection from "../components/WorkSection";
import Line from "../images/line.svg";

import dbPDF from "../files/dbProject.pdf";

const workInfo = [
    {
        img: ChattyAppIcon,
        title: "Chatty App",
        description: "A live, responsive, 3-tier chat app with group and private chats. Deployed with AWS's EC2, Route53, and built with MERN and socket.io.",
        link: "http://chattyapp.ca"
    },
    {
        img: RRCTN,
        title: "Red Ray Construction Website",
        description: "A website designed and built for a friend's company while I was in school using HTML5, CSS3 and JS.",
        link: "https://github.com/KyleP55/RedRayWebsite/tree/main"
    },
    {
        img: GLTN,
        title: "Mobile Goals List App",
        description: "A very basic mobile list app to add goals. Built in React Native and powered by Expo.",
        link: "https://github.com/KyleP55/ReactNative_NumberGame"
    },
    {
        img: MNGTN,
        title: "Mobile Number Game",
        description: "A mobile game where the computer tries to guess your number, powered by Expo.",
        link: "https://github.com/KyleP55/ReactNative_NumberGame"
    },
    {
        img: MFATN,
        title: "Mobile Food App",
        description: "A mobile app with food recipes including steps and ingredients, built with React Native and powered by Expo.",
        link: "https://github.com/KyleP55/MealsApp"
    },
    {
        img: MFTN,
        title: "Mobile Native Features App",
        description: "A mobile app that uses Native mobile features such as Location, Google Maps, Camera, and Permissions. The Google Maps key trail has expired so the map portion does not function properly at the moment.",
        link: "https://github.com/KyleP55/NativeFeats"
    },
    {
        img: DbProjectTN,
        title: "School Database Design Project",
        description: "A formal SQL database design proposal for a made up company.",
        link: dbPDF
    },
]

function Work({ activePage, onClick }) {
    // Scroll Fade Away
    $(function () {
        setTimeout(() => {
            $(".mouse").fadeOut(2000);
        })
    });

    return (<div className='row flex-row-reverse headMarg'>
        <div className='col-xl-9 col-lg-8 col-md-12 pageContent'>
            <PagesGroup activePage={activePage} onClick={onClick} />
            <div className="row pageInfo scroll" id="pageInfo">
                <div className="contentHeader">
                    <h2 className="contentHeaderTitle">PORTFOLIO</h2>
                    <img src={Line} className="line" />
                </div>

                <div className="workSectionDiv">
                    {workInfo && workInfo.map((i, index) => {
                        return (<WorkSection info={i} index={index} key={index} />)
                    })}
                </div>
                <div className="mouse" />
            </div>
        </div>
        <Profile />
    </div>);
}

export default Work;