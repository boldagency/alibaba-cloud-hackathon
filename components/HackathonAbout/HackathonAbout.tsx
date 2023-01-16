
import styles from "./HackathonAbout.module.scss";

const HackathonAbout = ({ }) => {
    const timeline = [
        {
            label: "Hackathon Announcement",
            date: "14 - 15 Jan"
        },
        {
            label: "Hackathon Registration Start",
            date: "14 - 16 Jan"
        },
        {
            label: "Hackathon Registration End",
            date: "22 Jan"
        },
        {
            label: "Hackathon Challenge Criteria Reveal and Start",
            date: "22 Jan"
        },
        {
            label: "Hackathon End",
            date: "29 Jan - 01 Feb"
        },
        {
            label: "Filtration",
            date: "02 Feb - 05 Feb"
        },
        {
            label: "Judging",
            date: "22  Jan"
        },
        {
            label: "Demo days (During LEAP)",
            date: "06 Feb - 08 Feb"
        },
        {
            label: "Winning Ceremony and announcement",
            date: "09 Feb"
        }
    ]
    return (
        <>
            <div className={styles.HackathonAboutContainer + ' container-space section-space'}>
                <div className={styles.HackathonTimeline}>
                    <div className="section-title">Timeline</div>

                    <div className={styles.timeline}>
                        {
                            timeline.map((time, i) => {
                                return <div key={i} className={styles.time}>
                                    <div className={styles.label}>{time.label}:</div>
                                    <div className={styles.date}>{time.date}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className={styles.HackathonPrize+ ' container-space section-space'}>
                <div className="section-title">Prizes</div>

                <div className={styles.sectionHeading}>
                <div className={styles.heading}>Total prizes are <span>1,000,000 SAR</span></div>
                <div className={styles.headingSecondary}>Many sponsor prizes will include just one unit in such case, the team must let the organizers know who should receive the prize by deciding amongst themselves.</div>
                
            </div>
            </div>
        </>

    );
};

export default HackathonAbout;
