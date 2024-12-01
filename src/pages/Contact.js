import Profile from "../components/Profile";
import PagesGroup from "../components/PagesGroup";

function Contact({ activePage, onClick }) {
    return (<div className='row flex-row-reverse headMarg'>
        <div className='col-xl-9 col-lg-8 col-md-12 pageContent'>
            <PagesGroup activePage={activePage} onClick={onClick} />
            <div className="row pageInfo">

            </div>
        </div>
        <Profile />
    </div>);
}

export default Contact;