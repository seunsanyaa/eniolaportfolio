
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


import recentprojectstyles from './recentprojects.module.scss'

import herostyles from "../Hero/hero.module.scss";
import {useEffect, useRef, useState} from "react";
import {TimelineMax, gsap } from 'gsap'
import  ScrollTrigger  from "gsap/ScrollTrigger";
import CustomEase from 'gsap/dist/CustomEase'

// import CSSRulePlugin from 'gsap/CSSRulePlugin'
gsap.registerPlugin(ScrollTrigger,CustomEase);
export default function RecentProjects( ) {
let head = useRef();
let proj= useRef();
    let container= useRef();
    let shalo= useRef()
    let cov= useRef();
    let mask = useRef();
    let img = useRef();
    let imgContainer= useRef();
    let imgContainerCashPay = useRef();
    let imgContainerGrid = useRef();
    // let imageReveal = CSSRulePlugin.getRule(".imgContainer:after")






    useEffect(() => {


        gsap.from([head.current],
            {

    y:50,
            autoAlpha:0,
            duration:1,

                scrollTrigger:head.current

        });


        const GSAP = require("gsap/dist/CSSRulePlugin");
        const { CSSRulePlugin } = GSAP;
        gsap.registerPlugin(CSSRulePlugin);
        // do whatever you want to do with the plugin, its Working now...
        // for example
        let imageReveal = CSSRulePlugin.getRule(".imgContainer:after");
        let imageReveal2 = CSSRulePlugin.getRule(".imgContainerCashPay:after");
        let imageReveal3 = CSSRulePlugin.getRule(".imgContainerGrid:after");
        let imageReveal4 =CSSRulePlugin.getRule(".imgContainerGrid2:after");

        gsap.to(imageReveal,
            1.2,
            {width:"0%",
                ease: CustomEase.create("custom", "M0,0,C0.173,0,0.242,0.036,0.322,0.13,0.401,0.223,0.449,0.367,0.502,0.506,0.546,0.622,0.62,0.824,0.726,0.916,0.799,0.98,0.869,1,1,1")
// duration:5
                ,scrollTrigger:head.current


            }
            )

        gsap.to(imageReveal2,
            1.2,
            {width:"0%",
                ease: CustomEase.create("custom", "M0,0,C0.173,0,0.242,0.036,0.322,0.13,0.401,0.223,0.449,0.367,0.502,0.506,0.546,0.622,0.62,0.824,0.726,0.916,0.799,0.98,0.869,1,1,1")
// duration:5
                ,scrollTrigger:imgContainerCashPay.current


            }
        )

        gsap.fromTo(imageReveal3,
            {height:"0%"
// duration:5
//                 yPercent:-100



            },
            {height:"100%",
                ease: CustomEase.create("custom", "M0,0,C0.173,0,0.242,0.036,0.322,0.13,0.401,0.223,0.449,0.367,0.502,0.506,0.546,0.622,0.62,0.824,0.726,0.916,0.799,0.98,0.869,1,1,1")
// duration:5
//                 ,yPercent:0
                ,scrollTrigger:imgContainerGrid.current,

duration:1.2

            }
            );

        gsap.fromTo(imageReveal4,
            {height:"0%"
// duration:5
//                 yPercent:-100



            },
            {height:"100%",
                ease: CustomEase.create("custom", "M0,0,C0.173,0,0.242,0.036,0.322,0.13,0.401,0.223,0.449,0.367,0.502,0.506,0.546,0.622,0.62,0.824,0.726,0.916,0.799,0.98,0.869,1,1,1")
// duration:5
//                 ,yPercent:0
                ,scrollTrigger:imgContainerGrid.current,

duration:1.2

            }
            );

//
//         gsap.to(imageReveal3,
//             1.7,
//             {height:"0%",
//                 ease: CustomEase.create("custom", "M0,0,C0.173,0,0.242,0.036,0.322,0.13,0.401,0.223,0.449,0.367,0.502,0.506,0.546,0.622,0.62,0.824,0.726,0.916,0.799,0.98,0.869,1,1,1")
// // duration:5
//                 ,scrollTrigger:imgContainerGrid.current
//
//
//             }
//         )

    },[]);

    return (


<div className={recentprojectstyles.container} ref={container}>
<div className={recentprojectstyles.shalo} ref={shalo}>
<div className={recentprojectstyles.headerContainer} ref={head}>
    <h3 className={recentprojectstyles.header}>
        My Recents Projects
    </h3>

    <img width={235} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641389237/Underline_07_qw6l9n.png'/>

    <p className={recentprojectstyles.headerParagraph}>Over the past few years I’ve had the chance to work on multiple projects with a human centered approach and empathy driven mindset. Projects range from a simple redesign to a complete user experience revamp.</p>

</div>
</div>


    <div className={recentprojectstyles.projectcontainer}  ref={proj}>
        <a href="https://medium.com/@eni.ajibode/bundle-africa-learn-a-case-study-of-a-conceptual-feature-dfd513dd6b54" >
<div className="imgContainer" ref={imgContainer}>

        <img ref={img}  className={recentprojectstyles.bundleImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641389863/Slide_16_9_-_5_1_czhtud.png"/>


    </div>

        {/*<div className={recentprojectstyles.cover} ref={cov}> </div>*/}

        <img className={recentprojectstyles.bundleImageMobile} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641490173/Instagram_post_-_3_egdqh5.png'/>

        <div className={recentprojectstyles.bundle}>

            <h3 className={recentprojectstyles.casestudy}>case study</h3>
{/*<img src="data:image/svg+xml,%3Csvg width='97' height='2' viewBox='0 0 97 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.3' d='M1 1H96' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A"/>*/}
<h3 className={recentprojectstyles.aboutProject}>
    <span className={recentprojectstyles.projectName}>Bundle Africa (Learn):</span>
    <span className={recentprojectstyles.casestudyparagraph}>A case study of a conceptual feature.

    </span>
    </h3>

        </div>

        <img className={recentprojectstyles.longline} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641308852/Vector_52_drcnnn.png"/>


        </a>
    </div>

    <div className={recentprojectstyles.projectcontainer}>

        <a href='https://www.behance.net/gallery/118783147/Cashpay-App-Presentation'>
            <div className="imgContainerCashPay"   ref={imgContainerCashPay}>

            <img className="cashPayImage" src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641396770/Frame_1_1_yqditk.png"/>
            </div>
        <img className={recentprojectstyles.bundleImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641490173/Instagram_post_-_1_dpruir.png"/>


        <div className={recentprojectstyles.bundle}>

            <h3 className={recentprojectstyles.casestudy}>case study</h3>
            {/*<img src="data:image/svg+xml,%3Csvg width='97' height='2' viewBox='0 0 97 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.3' d='M1 1H96' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A"/>*/}
            <h3 className={recentprojectstyles.aboutProject}>
                <span className={recentprojectstyles.projectName}>Cashpay: </span>
                <span className={recentprojectstyles.casestudyparagraph}> A loan app for middle-income earners.

    </span>
            </h3>

        </div>

        <img className={recentprojectstyles.longline} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641308852/Vector_52_drcnnn.png"/>
        </a>
    </div>


    <div className={recentprojectstyles.projectGrid}>
        <div className={recentprojectstyles.projectcontainer}>
            <a href='https://www.aladdin.ng/'>
                <div className="imgContainerGrid" ref={imgContainerGrid}>

            {/*<img  className="aladdinImage" src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641397628/Macbook_Pro_-_Light_Background_1_fnm9ur.png"/>*/}
                </div>
            <img className={recentprojectstyles.bundleImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641490180/Group_13768_h0r5yh.png"/>


            <div className={recentprojectstyles.bundle}>

                <h3 className={recentprojectstyles.casestudy}>live project</h3>
                {/*<img src="data:image/svg+xml,%3Csvg width='97' height='2' viewBox='0 0 97 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.3' d='M1 1H96' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A"/>*/}
                <h3 className={recentprojectstyles.aboutProject}>
                    <span className={recentprojectstyles.projectName}>Aladdin:  </span>
                    <span className={recentprojectstyles.casestudyparagraph}> Bank Differently.

    </span>
                </h3>

            </div>

            </a>
        </div>

        <div></div>
        <div className={recentprojectstyles.projectcontainer}>

            <a href='https://blacklistng.com/'>
                <div className="imgContainerGrid2" ref={imgContainer}>

                {/*<img className="blacklistImage" src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641397678/Macbook_Pro_-_Light_Background_3_lw1vgy.png"/>*/}
                </div>
            <img className={recentprojectstyles.bundleImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641490174/Instagram_post_-_1-1_bsukfd.png"/>


            <div className={recentprojectstyles.bundle}>

                <h3 className={recentprojectstyles.casestudy}>live project</h3>
                {/*<img src="data:image/svg+xml,%3Csvg width='97' height='2' viewBox='0 0 97 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.3' d='M1 1H96' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A"/>*/}
                <h3 className={recentprojectstyles.aboutProject}>
                    <span className={recentprojectstyles.projectName}>Blacklist: </span>
                    <span className={recentprojectstyles.casestudyparagraphblacklist}>  Alternate database of chronic defaulters & AI-powered Debt Recovery.

    </span>
                </h3>

            </div>

            </a>
        </div>
    </div>

    <img className={recentprojectstyles.longline} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641308852/Vector_52_drcnnn.png"/>

</div>

    )
}
