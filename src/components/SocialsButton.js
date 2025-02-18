import { useNavigate } from "react-router-dom";
import "../css/socialsButton.css";

function SocialsButton({ icon, color, link }) {
    return (<div className="socialsButton" onClick={() => window.open(link)}>
        <ion-icon name={icon} color={color} />
    </div>)
}

export default SocialsButton;