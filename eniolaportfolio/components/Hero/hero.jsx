import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import herostyles from './hero.module.scss'


import {useEffect, useRef, useState} from "react";
import {TimelineMax, gsap } from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import  TextPlugin  from "gsap/dist/TextPlugin";
gsap.registerPlugin(CustomEase,TextPlugin)

export default function Hero( ) {
    let el = useRef();

    let ul = useRef();
    // let q = gsap.utils.selector(el);
    // const tl = useRef();
    useEffect(() => {

      // let tl = new TimelineMax({
      //       paused:true
      //   });

        gsap.fromTo([el.current],
            {autoAlpha: 0, x: -20},
            {autoAlpha: 1,
                duration: 0.5, repeat: -1, /* same as CSS .line-1 width */
            ease:  CustomEase.create("custom", "M0,0,C0,0,0.45,-0.088,0.495,0,0.584,0.179,0.409,0.82,0.5,1,0.545,1.089,1,1,1,1")
        }, 0);

       let tween = gsap.to(
           [ul.current],
            {text:
                    {value: "I am a UI/UX Designer based in Lagos, Nigeria. I am focused on creating User-centric digital products and meaningful experiences."},
                duration: 3,
                delay: 1, ease: "none"});

    },[]);
    return (



        <div className={herostyles.container}>

            <h3 className={herostyles.hithere}>Hi There! I’m Eniola <span className={herostyles.smiley}> <img width={27} src="data:image/svg+xml,%3Csvg width='32' height='17' viewBox='0 0 32 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M30.5383 2.18049C24.4845 13.4374 12.3915 18.0139 1.15965 11.6766C0.785735 11.4655 0.311577 11.5975 0.100552 11.9668C-0.110473 12.3426 0.0214315 12.8174 0.395341 13.0285C12.4343 19.8274 25.4183 14.9805 31.9073 2.91908C32.1104 2.54319 31.9686 2.06832 31.5908 1.86389C31.2129 1.66605 30.7414 1.8046 30.5383 2.18049Z' fill='%23F9C136'/%3E%3Cpath d='M10.6119 6.84829C11.8624 6.84829 12.8762 5.83457 12.8762 4.58406C12.8762 3.33355 11.8624 2.31982 10.6119 2.31982C9.36138 2.31982 8.34766 3.33355 8.34766 4.58406C8.34766 5.83457 9.36138 6.84829 10.6119 6.84829Z' fill='%23F9C136'/%3E%3Cpath d='M19.9846 4.43996C21.2107 4.43996 22.2047 3.44605 22.2047 2.21998C22.2047 0.993911 21.2107 0 19.9846 0C18.7586 0 17.7646 0.993911 17.7646 2.21998C17.7646 3.44605 18.7586 4.43996 19.9846 4.43996Z' fill='%23F9C136'/%3E%3C/svg%3E%0A"/></span></h3>

        <span className={herostyles.aboutMe}  ref={ul}>
           {/*I am a UI/UX Designer based in Lagos, Nigeria. I am focused on creating User-centric digital products and meaningful experiences.*/}

        </span>
            <span id="cursor" ref={el} className={herostyles.aboutMeCursor} ></span>


            <div className={herostyles.scrolltrigger}>

                Scroll to see my selected projects
               <img className={herostyles.arrow} src="data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.00031 12.3958C6.88948 12.3958 6.77865 12.355 6.69115 12.2675L3.15031 8.72665C2.98115 8.55749 2.98115 8.27749 3.15031 8.10832C3.31948 7.93915 3.59948 7.93915 3.76865 8.10832L7.00031 11.34L10.232 8.10832C10.4011 7.93915 10.6811 7.93915 10.8503 8.10832C11.0195 8.27749 11.0195 8.55749 10.8503 8.72665L7.30948 12.2675C7.22198 12.355 7.11115 12.3958 7.00031 12.3958Z' fill='white'/%3E%3Cpath d='M7 12.2966C6.76083 12.2966 6.5625 12.0983 6.5625 11.8591V2.04163C6.5625 1.80246 6.76083 1.60413 7 1.60413C7.23917 1.60413 7.4375 1.80246 7.4375 2.04163V11.8591C7.4375 12.0983 7.23917 12.2966 7 12.2966Z' fill='white'/%3E%3C/svg%3E%0A"/>

               </div>

            <img className={herostyles.longline} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641308852/Vector_52_drcnnn.png"/>

        </div>
    )
}
