import { useEffect } from "react";
import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";
import Line from "../images/line.svg";
import $ from "jquery";

import AboutMeSection from "../components/AboutMeSection";

import devIcon from "../images/development.svg";
import appIcon from "../images/app.svg";
import gameIcon from "../images/game.png";
import databaseIcon from "../images/database.png";

const sectionInfo = [
    {
        image: devIcon,
        title: "Full-Stack Development",
        info: "Over 4 years of experience building full-stack applications with MongoDB, Express, React, and Node.js. I also work with Next.js, C#/.NET, Python, and Java/Spring. See examples on my Work page."
    },
    {
        image: appIcon,
        title: "Mobile App Development",
        info: "2+ years developing iOS and Android apps with React Native. Comfortable with Expo, UI libraries, and optimizing layouts for phones and tablets. Mobile projects are available on GitHub."
    },
    {
        image: databaseIcon,
        title: "Data-Base Design/Development",
        info: "Experienced with both SQL and NoSQL data modeling. I enjoy translating project requirements into clean, efficient, and scalable database structures. See my database design project for an example."
    },
    {
        image: gameIcon,
        title: "Game Development",
        info: "Game development is what ignited my passion for programming when I was in highschool back in 2005. Though it was just a side hobby at the time, I started out with Tutoring and Flash ActionScript 2, but then switch to GMS, Unity and Godot."
    },
]

function Home({ activePage, onClick }) {
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
                    <h2 className="contentHeaderTitle">ABOUT ME</h2>
                    <img src={Line} className="line" />
                </div>
                <div className="paragraphDiv">
                    <p className="paragraphText"><b>Full-stack developer specializing in the MERN stack. </b>
                        <br />
                        I build reliable, user-focused web applications with clear structure, maintainable code, and modern tooling. My experience spans frontend interfaces, backend APIs, and deployment pipelines on AWS.</p>
                </div>
                <h2 className="subTitle">What I Do!</h2>

                <div className="sectionDiv">
                    {sectionInfo && sectionInfo.map((i, index) => {
                        return (<AboutMeSection info={i} index={index} key={index} />)
                    })}
                </div>
                <div className="mouse" />
            </div>
        </div>
        <Profile />
    </div>);

}

export default Home;