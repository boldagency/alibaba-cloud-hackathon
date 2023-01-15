
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = ({
}) => {

    const router = useRouter();

    return (
        <>
            <header
                className={cx(styles.Footer, 'container-space', {

                })}
            >
                <div className="footer-left">
                        <div className={styles.logo}>
                            <Link href="/">
                                <img src="assets/images/logo-black.svg" alt="logo" height="100%" />
                            </Link>
                        </div>
                        
                    </div>
                    <div className={styles.footerText}>
                        <span>Copyright {new Date().getFullYear()}© Alibaba</span>
                        <span>EN</span>
                        </div>

            </header>
        </>
    );
};

export default Footer;
