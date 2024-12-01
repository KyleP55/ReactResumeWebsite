import { useNavigate } from "react-router-dom";
import "../css/socialsButton.css";

function SocialsButton({ icon, color }) {
    return (<div className="socialsButton">
        <ion-icon name={icon} color={color} />
    </div>)
}

export default SocialsButton;