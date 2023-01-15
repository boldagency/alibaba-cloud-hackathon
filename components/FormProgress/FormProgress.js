
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./FormProgress.module.scss";
import Link from "next/link";

const FormProgress = ({
    formStep,
    className='',
    compact = false
}) => {

    const router = useRouter();
    const steps= [
        'Contact',
        'Company Info',
        'Review & Submit'
    ]

    return (
        <div
            className={cx(styles.FormProgress, className, {})}
        >

            {
                steps.map((step,i) => {
                    return <div className={cx(styles.step, {
                        [styles.active]: i <= formStep,
                        [styles.progressLine]: i<steps.length-1,
                        [styles.progressLineActive]: i<formStep,
                        [styles.compact]: compact
                    })} key={i}>
                        <div className={styles.stepLabel}><span>{step}</span> </div>
                        
                    </div>
                })
            }

        </div>
    );
};

export default FormProgress;
