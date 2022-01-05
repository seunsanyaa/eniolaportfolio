import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'

import emailstyles from './writeemail.module.scss'

import {useState} from "react";
import recentprojectstyles from "../RecentProjects/recentprojects.module.scss";


export default function WriteEmail( ) {

    return (



   <div className={emailstyles.container}>
              <h3 className={emailstyles.emailHeader}>

                  Let’s Collaborate
              </h3>

       <p className={emailstyles.emailParagraph}>
           I am available to work on your projects and bring your ideas to life. I am just a click away.
       </p>

       <button className={emailstyles.button}>
           Write an Email
       </button>

   </div>
    )
}
