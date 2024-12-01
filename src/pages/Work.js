import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";

import ChattyAppIcon from "../images/ChattyAppTN.png"
import GithubIcon from "../images/githubTN.jpg";
import DbProjectTN from "../images/dbProjectTN.png";

import WorkSection from "../components/WorkSection";
import Line from "../images/line.svg";

import dbPDF from "../files/dbProject.pdf";

const workInfo = [
    {
        img: GithubIcon,
        title: "Github",
        description: "Mern, React Native and other projects",
        link: "https://github.com/KyleP55/"
    },
    {
        img: ChattyAppIcon,
        title: "Chatty App",
        description: "A live chat app deployed with AWS, built with MERN and socket.io.",
        link: "http://chattyapp.ca"
    },
    {
        img: DbProjectTN,
        title: "School Database Design Project",
        description: "A formal SQL database design proposal for a made up company.",
        link: dbPDF
    },
    {
        img: ChattyAppIcon,
        title: "Chatty App",
        description: "A live chat app deployed with AWS, built with MERN and socket.io.",
        link: "http://chattyapp.ca"
    },
]

function Work({ activePage, onClick }) {
    return (<div className='row flex-row-reverse headMarg'>
        <div className='col-xl-9 col-lg-8 col-md-12 pageContent'>
            <PagesGroup activePage={activePage} onClick={onClick} />
            <div className="row pageInfo">
                <div className="contentHeader">
                    <h2 className="contentHeaderTitle">PORTFOLIO</h2>
                    <img src={Line} className="line" />
                </div>

                <div className="workSectionDiv">
                    {workInfo && workInfo.map((i, index) => {
                        return (<WorkSection info={i} index={index} key={index} />)
                    })}
                </div>
            </div>
        </div>
        <Profile />
    </div>);
}

export default Work;