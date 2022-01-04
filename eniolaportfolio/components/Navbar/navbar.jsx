import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import navstyles from './navbar.module.scss'



import {useState} from "react";


export default function NavBar( ) {

    return (

        <div className={navstyles.nav}>

            <div className={styles}>



                <div className={navstyles.NavbarContainer}>

                    <div className={navstyles.profileImageandName}>

                    <img width={60} height={60} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1641303881/Rectangle_54_em9y46.png"/>

                        <h3 className={navstyles.name}>Eniola Ajibode</h3>

                    </div>


                    <div className={navstyles.rightNav}>

                    <div className={navstyles.beforeDivider}>



                        <Link href="/" >

                            <a className={navstyles.menuLinkContent} >  Resume  </a>


                        </Link>


                        <Link href="/" >

                            <a className={navstyles.menuLinkContent} >  Contact me </a>


                        </Link>


                    </div>
                    <img className={navstyles.divider}  height={50} src="data:image/svg+xml,%3Csvg width='2' height='68' viewBox='0 0 2 68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V68' stroke='%23C4C4C4'/%3E%3C/svg%3E%0A"/>

                    <div className={navstyles.afterDivider}>


                            <img className={navstyles.icons} width={32} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641305857/Group_52_z48o2r.png'/>






                            {/*<a className={navstyles.menuLinkContent} >  Contact me </a>*/}
                            <img className={navstyles.icons} width={32} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306171/instagram_wwwqqe.png'/>
                            <img className={navstyles.icons} width={32} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306324/Group_51_mv43jn.png'/>
                            <img className={navstyles.icons} width={32} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306376/dribbble_ggl4fv.png'/>



                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
