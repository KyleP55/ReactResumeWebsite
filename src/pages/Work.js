import { useEffect } from "react";
import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";
import $ from "jquery";

import setBodyHeight from "../utility/setBodyHeight";
import ChattyAppIcon from "../images/ChattyAppSS.png"
import DbProjectTN from "../images/dbProjectTN.png";
import AATN from "../images/ArmyAppTN.png";
import ProjectManagerTN from "../images/ProjectManagerTN.png";


import WorkSection from "../components/WorkSection";
import Line from "../images/line.svg";

import dbPDF from "../files/dbProject.pdf";

const workInfo = [
    {
        img: ProjectManagerTN,
        title: "Project Manager App",
        description: "A full MERN-stack project and time-tracking app with support for projects, tasks, and multi-level subtasks. Includes real-time time logging, and user roles for both solo and team workflows. Mobile layout and analytics to come!",
        link: "https://projectManager.kyle-p.dev"
    },
    {
        img: ChattyAppIcon,
        title: "Chatty App",
        description: "A full-stack real-time chat platform featuring private (1-on-1) and group conversations with live updates through Socket.IO. All messages are stored in MongoDB for seamless syncing across devices. Built with the MERN stack and deployed on AWS EC2.",
        link: "https://chattyApp.kyle-p.dev"
    },
    {
        img: DbProjectTN,
        title: "Relational Database Architecture Proposal",
        description: "A comprehensive SQL database design for a hypothetical company, including entity-relationship modeling, normalization, schema definitions, and justification of design decisions.",
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