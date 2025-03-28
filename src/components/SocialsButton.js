import "../css/socialsButton.css";

function SocialsButton({ icon, color, link }) {
    return (<div className="socialsButton" onClick={() => window.open(link)}>
        <img src={icon} alt="social image" className="socialsIcon" />
    </div>)
}

export default SocialsButton;