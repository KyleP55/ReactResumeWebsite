import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";
import EduExpSection from "../components/EduExpSection";

import Line from "../images/line.svg";
import DegreeHat from "../images/degreeHat.svg";
import Briefcase from "../images/briefcase.svg";

const education = [
    {
        date: "2021-2023",
        title: "Computer Programmer",
        from: "Lambton College"
    },
    {
        date: "2024-In Progress",
        title: "AWS Cloud Certified",
        from: "Udemy"
    }
];

const experience = [
    {
        date: "2023",
        title: "Software Developer/Data Cleanser",
        from: "I.M.A. LTD. (Co-Op)"
    },
    {
        date: "2022",
        title: "Web Developer/Designer",
        from: "Red Ray Constuction"
    }
];

const profSkills = [
    "React.JS",
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "React Native",
    "SQL",
    "MongoDB",
    "Git",
    "BootStrap",
    "GMS2"
];

const softSkills = [
    "Time Management",
    "Problem Solving",
    "Organization",
    "Customer Service",
    "Passion for Learning"
];

const relatedSkills = [
    "C#",
    "Python",
    "Java",
    "AWS (EC2, S3, IAM, Route53)",
    ".NET",
    "Spring/Tyme-Leaf",
    "Pip",
    "TypeScript",
    "TailWind",
    "CI/CD Pipeline",
    "Agile Methodology",
    "Figma",
    "Linux OS",
    "Unity",
    "Godot",
];

function Resume({ activePage, onClick }) {
    return (<div className='row flex-row-reverse headMarg'>
        <div className='col-xl-9 col-lg-8 col-md-12 pageContent'>
            <PagesGroup activePage={activePage} onClick={onClick} />
            <div className="row pageInfo flatBottom">
                <div className="contentHeader">
                    <h2 className="contentHeaderTitle">Resume</h2>
                    <img src={Line} className="line" />
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 sectionTitle">
                        <img src={DegreeHat} className="eduExpImg" />
                        <h2 className="sectionTitleText eduExpTitleText">Education</h2>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 sectionTitle">
                        <img src={Briefcase} className="eduExpImg" />
                        <h2 className="sectionTitleText eduExpTitleText">Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        {education && education.map((i, index) => {
                            return <EduExpSection info={i} index={index} key={index} />
                        })}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        {experience && experience.map((i, index) => {
                            return <EduExpSection info={i} index={index + 1} key={index} />
                        })}
                    </div>
                </div>
            </div>
            {/* Skills Bit */}
            <div className="row skillsContainer">
                <div className="Col-xl-6 col-lg-6 col-md-6">
                    <h2 className="skillsTitleText">Proficient Skills</h2>
                    <div className="skillsList">
                        {profSkills && profSkills.map((i, index) => {
                            return <p className="skill" key={index}>{i}</p>
                        })}
                    </div>
                </div>
                <div className="Col-xl-6 col-lg-6 col-md-6">
                    <h2 className="skillsTitleText">Soft Skills</h2>
                    <div className="skillsList">
                        {softSkills && softSkills.map((i, index) => {
                            return <p className="skill" key={index}>{i}</p>
                        })}
                    </div>
                </div>
                <div className="Col-xl-12 col-lg-12 col-md-12">
                    <h2 className="skillsTitleText">Related Skills</h2>
                    <div className="skillsList">
                        {relatedSkills && relatedSkills.map((i, index) => {
                            return <p className="skill" key={index}>{i}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <Profile />
    </div>);
}

export default Resume;