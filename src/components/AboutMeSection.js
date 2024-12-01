function AboutMeSection({ info, index }) {

    let num = 0;
    if (index + 1 > 1) num = Math.floor((index + 1) / 2);
    if (num > 1) num = num % 2;

    let cn = num === 0 ? "grey" : "orange"
    cn += " aboutMeSection";

    return (<div className={cn}>
        <div className="sectionTitle">
            <img src={info.image} className="sectionTitleImage" />
            <p className="sectionTitleText">{info.title}</p>
        </div>
        <p className="sectionText">{info.info}</p>
    </div>);

}

export default AboutMeSection;