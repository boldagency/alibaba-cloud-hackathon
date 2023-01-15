
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./HackathonRegisterForm.module.scss";
import Link from "next/link";
import FormProvider from "./steps/Context";

import { useRef, useState } from "react";
import ContactInfo from "./steps/ContactInfo";
import CompanyInfo from "./steps/CompanyInfo";
import ReviewInfo from "./steps/ReviewInfo";
import { Widget } from "@typeform/embed-react";

const HackathonRegisterForm = ({ }) => {

    const router = useRouter();
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
    
    return (
        <div id="Register" className={styles.HackathonRegisterFormContainer + ' container-space'}>
            <div className="section-title">Join Our Hackathon</div>
            <div className={styles.sectionHeading}>
                <div className={styles.heading}>Register Your Interest</div>
                <div className={cx(styles.headingSecondary)}>Complete the form below and our hackathon program advisor will get back to you shortly.</div>
                
            </div>
            <div
                className={cx(styles.HackathonRegisterForm, '', {
                })}
            >

            <Widget id="Nq5YyccJ" style={{ width: '100%', height: '100vh' }} className={styles.registerForm} />
            </div>
        </div>
    );
};

export default HackathonRegisterForm;
