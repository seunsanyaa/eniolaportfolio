import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from "../components/Navbar/navbar";
import Hero from "../components/Hero/hero";
import RecentProjects from "../components/RecentProjects/recentprojects";
import WriteEmail from "../components/WriteEmail/writeemail";
import {useEffect, useRef, useState} from "react";
import {TimelineMax, gsap } from 'gsap'
import Scrollbar from 'smooth-scrollbar';
import  ScrollTrigger  from "gsap/ScrollTrigger";
import CustomEase from 'gsap/dist/CustomEase'

// import CSSRulePlugin from 'gsap/CSSRulePlugin'
gsap.registerPlugin(ScrollTrigger,CustomEase,Scrollbar);

import emailstyles from "../components/WriteEmail/writeemail.module.scss";
export default function Home() {

    useEffect(() => {
        const GSAP = require("gsap/dist/CSSRulePlugin");
        const {CSSRulePlugin} = GSAP;
        gsap.registerPlugin(CSSRulePlugin);
        // do whatever you want to do with the plugin, its Working now...
        // for example
        // let section = CSSRulePlugin.getRule(".viewport");
        const scroller = document.querySelector('.viewport');
        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true });

        ScrollTrigger.scrollerProxy(".viewport", {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value; // setter
                }
                return bodyScrollBar.scrollTop;    // getter
            },
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            }
        });
        bodyScrollBar.addListener(ScrollTrigger.update);

        ScrollTrigger.defaults({ scroller: scroller });
// when the smooth scroller updates, tell ScrollTrigger to update() too:
        // gsap.set(section, {
        //     y: -window.pageYOffset
        // });

    })
  return (
    <div className={styles.container}>
      <Head>
        <title>Eniola Ajibode</title>
        <meta name="description" content="My Portfolio" />

      </Head>

        <section className="viewport">

            <div className="scroll-container">




        <NavBar/>

        <Hero/>

        <RecentProjects/>

<WriteEmail/>

        <img className={styles.longline} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641308852/Vector_52_drcnnn.png"/>


        <footer className={styles.footer}>
            <div>
            <i className={styles.italic}>Developed by </i>

            <a href='https://www.linkedin.com/in/oluwaseun-sanyaolu-3a4404205/' rel="noreferrer"  target="_blank" className={styles.seun}> &nbsp;Oluwaseun Sanyaolu</a>
            </div>
        </footer>

            </div>
        </section>
    </div>
  )
}
