import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PagesButton from "./PagesButton";

import homeIcon from "../images/homeIcon.svg";
import resumeIcon from "../images/resumeIcon.svg";
import workIcon from "../images/workIcon.svg";
import contactIcon from "../images/contactIcon.svg";
import activeHomeIcon from "../images/activeHomeIcon.svg";
import activeResumeIcon from "../images/activeResumeIcon.svg";
import activeWorkIcon from "../images/activeWorkIcon.svg";
import activeContactIcon from "../images/activeContactIcon.svg";

import "../css/pagesButton.css";

const info = [
    {
        name: "Home",
        icon: homeIcon,
        activeIcon: activeHomeIcon
    },
    {
        name: "Resume",
        icon: resumeIcon,
        activeIcon: activeResumeIcon
    },
    {
        name: "Work",
        icon: workIcon,
        activeIcon: activeWorkIcon
    },
    {
        name: "Contact",
        icon: contactIcon,
        activeIcon: activeContactIcon
    }
]

function PagesGroup({ activePage, onClick }) {
    const nav = useNavigate();

    function onClickHandler(i) {
        onClick(i);
        let name;
        info[i].name === "Home" ? name = "" : name = info[i].name;
        nav(`/${name}`);
    }

    return (<div className="pagesContainer">
        {info.map((i, index) => {
            return <PagesButton
                info={i}
                active={activePage === index ? true : false}
                key={index}
                onClick={onClickHandler}
                id={index}
            />
        })}
    </div>);
}

export default PagesGroup;