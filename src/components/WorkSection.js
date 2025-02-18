import { useNavigate } from "react-router-dom";
import "../css/workSection.css";

function WorkSection({ info, index }) {
    let num = 0;
    if (index + 1 > 1) num = Math.floor((index + 1) / 2);
    if (num > 1) num = num % 2;

    let cn = num === 0 ? "col1" : "col2"
    cn += " workSection";



    return (<div className="outerDiv"><div className={cn}><a href={info.link} className="clearUnderline">
        <div className="centerImg">
            <img src={info.img} className="workSectionImage" alt="image" />
        </div>
        <p className="sectionTitleText workSectionTitleText">{info.title}</p>
        <p className="sectionText workSectionText">{info.description}</p>
    </a></div></div>);

}

export default WorkSection;