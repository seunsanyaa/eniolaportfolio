import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import {useEffect, useRef, useState} from "react";
import { gsap } from 'gsap'
import emailstyles from './writeemail.module.scss'

import recentprojectstyles from "../RecentProjects/recentprojects.module.scss";


export default function WriteEmail( ) {

    let emailContainer =useRef();

    useEffect(() => {
        gsap.from([emailContainer.current], {
            y: 50,
            autoAlpha: 0,
            duration:1,

            scrollTrigger:emailContainer.current

        })
    })
    return (



   <div className={emailstyles.container} ref={emailContainer}>
              <h3 className={emailstyles.emailHeader}>

                  Let’s Collaborate
              </h3>

       <p className={emailstyles.emailParagraph}>
           I am available to work on your projects and bring your ideas to life. I am just a click away.
       </p>

       <a href="mailto:eni.ajibode@gmail.com">

       <button className={emailstyles.button} >

           Write an Email
       </button>
       </a>

   </div>
    )
}
