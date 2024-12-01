

function ContactGroup({ info }) {
    return (<a href={info.href} className="clearUnderline"><div className="contactGroupContainer">
        <div className="contactGroupInfo">
            <div>
                <img src={info.icon} className="contactIcon" />
            </div>
            <div className="contactGroupText">
                <p className="contactTitle">
                    {info.name}
                </p>
                <p className="contactText">
                    {info.text}
                </p>
            </div>
        </div>
        <div className="contactLine" />
    </div></a>);
}

export default ContactGroup;