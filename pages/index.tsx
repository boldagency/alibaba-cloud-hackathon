import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import  Header from '../components/Header/Header'
import  Footer from '../components/Footer/Footer'
import PageIntro from '../components/PageIntro/PageIntro'
import HighlightCard from '../components/HighlightCard/HighlightCard'
import HackathonThemes from '../components/HackathonThemes/HackathonThemes'
import HackathonRegisterForm from '../components/HackathonRegisterForm/HackathonRegisterForm'
import HackathonAbout from '../components/HackathonAbout/HackathonAbout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alibaba Cloud Saudi - Hackathon</title>
        <meta name="description" content="Alibaba Cloud Saudi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <PageIntro 
          label="Alibaba Cloud  / Hackathon"
          title={`Alibaba Cloud
          Hackathon`}
          cover="assets/images/bg.jpg"
          />
          <HighlightCard
          label="Overview"
          title={`About 
          Alibaba Cloud
          Hackathon`}
          description={`Alibaba Cloud Hackathon aims to bring together students, enthusiasts, professionals and even beginners from the Kingdom and around the world to innovate and build projects in
          the domain of cloud technologies by harnessing Alibaba Cloud’s capabilities and
          innovative vertical solutions that facilitate deployments, development, scalability
          and fast go-to market.
          
          We encourage our participants to build and utilize Alibaba Cloud’s methodologies and tools to come up with brilliant solutions and implementation to their ideas. We will provide you with educational resources, sessions and workshops to help you kick-start your solutions.`}
          cta={{
            label: "Register Now",
            link: "#Register"
          }}
          />
          <HackathonThemes/>
          <HackathonAbout/>


          <HackathonRegisterForm/>
      </main>
      <Footer></Footer>
    </>
  )
}
