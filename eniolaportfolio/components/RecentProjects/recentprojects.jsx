
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


import recentprojectstyles from './recentprojects.module.scss'
import {useState} from "react";
import herostyles from "../Hero/hero.module.scss";


export default function RecentProjects( ) {

    return (


<div className={recentprojectstyles.container}>

<div className={recentprojectstyles.headerContainer}>
    <h3 className={recentprojectstyles.header}>
        My Recents Projects
    </h3>

    <img width={235} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641389237/Underline_07_qw6l9n.png'/>

    <p className={recentprojectstyles.headerParagraph}>Over the past few years I’ve had the chance to work on multiple projects with a human centered approach and empathy driven mindset. Projects range from a simple redesign to a complete user experience revamp.</p>

</div>



    <div className={recentprojectstyles.projectcontainer}>
        <a >
        <img className={recentprojectstyles.bundleImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641389863/Slide_16_9_-_5_1_czhtud.png"/>


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
        <img className={recentprojectstyles.bundleImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641396770/Frame_1_1_yqditk.png"/>


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

            <img className={recentprojectstyles.bundleImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641397628/Macbook_Pro_-_Light_Background_1_fnm9ur.png"/>


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
            <img className={recentprojectstyles.bundleImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641397678/Macbook_Pro_-_Light_Background_3_lw1vgy.png"/>


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
