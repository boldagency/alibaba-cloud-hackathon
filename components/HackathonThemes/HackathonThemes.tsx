
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./HackathonThemes.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HackathonThemes = ({ }) => {

    const router = useRouter();

    const benefits = [
        {
            logo: './assets/images/themes/icon1.png',
            title: 'Education',
        },
        {
            logo: './assets/images/themes/icon2.png',
            title: 'Health',
        },
        {
            logo: './assets/images/themes/icon3.png',
            title: `Logistics
            (Last-mile delivery)`,
        },
        {
            logo: './assets/images/themes/icon4.png',
            title: 'E-commerce',
        },
        {
            logo: './assets/images/themes/icon5.png',
            title: 'FinTech',
        },
        {
            logo: './assets/images/themes/icon6.png',
            title: `Human-Computer Interaction
            (AI Powered chatbots)`,
        },
        {
            logo: './assets/images/themes/icon7.png',
            title: `Digital government`,
        }
    ]

    return (
        <div className={styles.HackathonThemesContainer + ' container-space section-space'}>
            <div className="section-title">Hackathon themes</div>
            <div className={styles.sectionHeading}>
                {/* <div className={styles.heading}>Alibaba Cloud</div>
                <div className={cx(styles.heading, styles.headingSecondary)}>Partner Benefits</div> */}
            </div>
            <div
                className={cx(styles.HackathonThemes, {
                })}
            >
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4.5}
                    loop={false}
                    speed={500}
                    autoplay={true}
                    initialSlide={0}
                    breakpoints={{

                        // when window width is >= 100px
                        100: {
                            slidesPerView: 1.2,
                            // spaceBetween: 0
                        },
                        // when window width is >= 800px
                        800: {
                            slidesPerView: 1.7,
                            // spaceBetween: 0
                        },
                        900: {
                            slidesPerView: 4.5,
                            // spaceBetween: 0
                        }
                    }

                    }
                >

                    {
                        benefits.map((benefit, i) => {
                            return <SwiperSlide key={i}>
                                <div className={styles.benefit} key={i}>
                                <div className={styles.benefitHeader}>
                                    <img src={benefit.logo} />
                                </div>
                                <div className={styles.benefitInfo}>
                                    <div className={styles.benefitTitle}>{benefit.title}</div>
                                </div>

                            </div>

                            </SwiperSlide>
                            
                            
                        })
                    }
                </Swiper>


            </div>
        </div>
    );
};

export default HackathonThemes;
