function EduExpSection({ info, index }) {
    let num = index % 2;

    let cn = num === 0 ? "col1" : "col2"
    cn += " eduExpSection";

    return (<div className={cn}>
        <p className="eduExpSectionTitle">{info.date}</p>
        <p className="eduExpSectionText">
            {info.title}
        </p>
        <p className="eduExpSectionText2">{info.from}</p>
    </div>);
}

export default EduExpSection;