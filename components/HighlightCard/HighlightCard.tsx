
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./HighlightCard.module.scss";
import Link from "next/link";

const HighlightCard = ({
    label,
    title,
    description,
    cta

}: {
  label?: string;
  title?: string;
  description?: string;
  cta?: {
    label: string;
    link: string;
  };

}) => {

    const router = useRouter();

    return (
        <div className={styles.HighlightCardContainer+ ' container-space-min-right container-space-min-left'}>
            <div
                className={cx(styles.HighlightCard, {

                })}
                
            >
                <div className={styles.cardTitle}>
                        { label && <div className={styles.label}>{label}</div>}
                    </div>
                <div className={cx(styles.cardContainer)}>
                    
                    { title && <h1 className={styles.title}>{title}</h1>}
                    <div className={styles.descriptionContainer}>
                    { description && <div className={styles.description}>{description}</div>}
                    { cta && <Link href={cta.link} className={styles.cta+' cta-secondary'}>
                        <div className="arrow"></div>{cta.label}</Link>}
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default HighlightCard;
