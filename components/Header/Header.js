
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = ({
}) => {

    const router = useRouter();

    return (
        <>
            <header
                className={cx(styles.header, 'container-space', {

                })}
            >
                <div className="top-header-left">
                        <div className={styles.logo}>
                            <Link href="https://alibabacloud.sa/">
                                <img src="assets/images/logo-white.svg" alt="logo" height="100%" />
                            </Link>
                        </div>
                        
                    </div>
                    {/* <div>
                        <button type="button" className="cta-primary"><span>Login / Register</span></button>
                        </div> */}

            </header>
        </>
    );
};

export default Header;
