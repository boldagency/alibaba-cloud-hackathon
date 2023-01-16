
import cx from "classnames";
import styles from "./HackathonRegisterForm.module.scss";
import { Widget } from "@typeform/embed-react";
import Link from "next/link";

const HackathonRegisterForm = ({ }) => {

    return (
        <div id="Register" className={styles.HackathonRegisterFormContainer + ' container-space'}>
            <div className="section-title">Join Our Hackathon</div>
            <div className={styles.sectionHeading}>
                <div className={styles.heading}>Register Your Interest</div>
                <div className={cx(styles.headingSecondary)}>Complete the form below and our hackathon program advisor will get back to you shortly.</div>
                <div className={cx(styles.headingSecondary)}>If you have any queries, please contact us at <Link href="mailto:hackathon@alibabacloud.sa">hackathon@alibabacloud.sa</Link></div>
            </div>
            <div
                className={cx(styles.HackathonRegisterForm, '', {
                })}
            >
                <Widget id="Nq5YyccJ" style={{ width: '100%', height: '100vh' }} className={styles.registerForm} />
                <div className={styles.partners}>
                    <img className={styles.partner} src="./assets/images/sponsors/SFCSP-logo.png"/>
                    <img className={styles.partner} src="./assets/images/sponsors/STC-logo.png"/>
                    <img className={styles.partner} src="./assets/images/sponsors/DGA-logo.png"/>
                </div>
            </div>
        </div>
    );
};

export default HackathonRegisterForm;
