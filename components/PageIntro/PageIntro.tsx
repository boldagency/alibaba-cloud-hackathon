
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./PageIntro.module.scss";
import Link from "next/link";

const PageIntro = ({
    cover,
    label,
    title,
    description,
    cta

}: {
  cover: string;
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
        <>
            <div
                className={cx(styles.PageIntro, {

                })}
            >
                <img src={cover} className={styles.cover}/>
                <div className={cx(styles.coverContainer, 'container-space')}>
                    { label && <div className={styles.label}>{label}</div>}
                    { title && <h1 className={styles.title}>{title}</h1>}
                    { description && <div className={styles.description}>{description}</div>}
                    { cta && <Link href={cta.link} className={styles.cta+' cta-outline'}>
                        <div className="arrow"></div>{cta.label}</Link>}
                </div>

            </div>
        </>
    );
};

export default PageIntro;
