function PagesButton({ info, active, onClick, id }) {
    // Active Layout
    const activePage = <div className="pagesButton pagesButtonActive" onClick={onClick.bind(this, id)}>
        <div className="pagesButtonInfo">
            <img src={info.activeIcon} className="pagesButtonIcon" />
            <p className="pagesButtonText pagesButtonInfoActive">{info.name}</p>
        </div>
    </div>

    // Normal Layout
    const nonActivePage = <div className="pagesButton" onClick={onClick.bind(this, id)}>
        <div className="pagesButtonInfo">
            <img src={info.icon} className="pagesButtonIcon" />
            <p className="pagesButtonText">{info.name}</p>
        </div>
    </div>

    return (<>
        {active && activePage}
        {!active && nonActivePage}
    </>)
}

export default PagesButton;