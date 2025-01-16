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
        info: "Over 4 years of experience with MERN stack, full-stack development is what I am most passionate about. With experience in Next.js, C# .net, Pyton and Java Thymeleaf/Spring I am quite diverse. Check out my Work page for live applications or my github for other projects!"
    },
    {
        image: appIcon,
        title: "Mobile App Development",
        info: "Over 2 years experience with React Native and still learning new languages and libraries. experience with developing for both Android and Apple for both mobile phone and tablets as well. Examples are projects are on my github and run on expo."
    },
    {
        image: gameIcon,
        title: "Game Development",
        info: "Game development is what ignited my passion for programming when I was in highschool back in 2005. Though it was just a side hobby at the time it I started out with Tutoring and Flash ActionScript 2 but then switch to GMS, Unity and Godot."
    },
    {
        image: databaseIcon,
        title: "Data-Base Design/Development",
        info: "With experience in both SQL and Non-Sql databases, I am confident I can design and build a database with relationships to fit any projects needs. On the work page you can find an example of a database design project I did in school."
    }
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
                    <p className="paragraphText">Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                        My journey in the world of web development has been nothing short of exhilarating, and
                        I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>
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