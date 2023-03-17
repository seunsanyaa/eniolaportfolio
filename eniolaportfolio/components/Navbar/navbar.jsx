import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import navstyles from './navbar.module.scss';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import NavBarModal from './mobilemodal';

import Modal from './modal';
import navstylemobile from './navbarmobile.module.scss';
const linkedIn = (
	<img
		className={navstyles.icons}
		width={32}
		src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641305857/Group_52_z48o2r.png'
	/>
);
const Instagram = (
	<img
		className={navstyles.icons}
		width={32}
		src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306171/instagram_wwwqqe.png'
	/>
);
const Behance = (
	<img
		className={navstyles.icons}
		width={32}
		src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306324/Group_51_mv43jn.png'
	/>
);
const Dribble = (
	<img
		className={navstyles.icons}
		width={32}
		src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306376/dribbble_ggl4fv.png'
	/>
);

export default function NavBar() {
	let el = useRef();
	let q = gsap.utils.selector(el);
	const tl = useRef();

	useEffect(() => {
		const GSAP = require('gsap/dist/CSSRulePlugin');
		const { CSSRulePlugin } = GSAP;
		gsap.registerPlugin(CSSRulePlugin);
		// do whatever you want to do with the plugin, its Working now...
		// for example
		let cont = CSSRulePlugin.getRule('.hidden');

		// uses el.current.querySelectorAll() internally

		tl.current = gsap.timeline();
		gsap.to(cont, 1, {
			visibility: 'visible',
		});

		gsap.from([el.current], {
			y: 25,
			autoAlpha: 0,
			//         css:{
			//         visibility: "visible"
			// }
		});

		// .to(q(".circle"), {
		//     x: 100
		// });
	}, []);

	const [showModal, setShowModal] = useState(false);
	return (
		<div className='hidden'>
			<div className={navstyles.nav} ref={el}>
				<div className={styles}>
					<div className={navstyles.NavbarContainer}>
						<div className={navstyles.profileImageandName}>
							<img
								className={navstyles.profileImage}
								width={60}
								height={60}
								src='https://res.cloudinary.com/dcvulgpi0/image/upload/v1679046024/Rectangle_54_nyhv8k.png'
							/>

							<h3 className={navstyles.name}>Eniola Ajibode</h3>
						</div>
						<div>
							<button
								className={navstyles.menuMobile}
								onClick={() => setShowModal(true)}
							>
								{' '}
								<img src="data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 10.5H31.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath opacity='0.34' d='M4.5 18H31.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M4.5 25.5H31.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A" />
							</button>

							<Modal onClose={() => setShowModal(false)} show={showModal}>
								<div className={navstylemobile.nav}>
									<div className={styles}>
										<button
											className={navstylemobile.cancel}
											onClick={() => setShowModal(false)}
										>
											<img src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 3C8.832 3 3 8.832 3 16C3 23.168 8.832 29 16 29C23.168 29 29 23.168 29 16C29 8.832 23.168 3 16 3ZM16 5C22.087 5 27 9.913 27 16C27 22.087 22.087 27 16 27C9.913 27 5 22.087 5 16C5 9.913 9.913 5 16 5ZM12.22 10.78L10.78 12.22L14.564 16L10.782 19.78L12.222 21.22L16 17.437L19.78 21.217L21.22 19.78L17.437 16L21.217 12.22L19.78 10.78L16 14.564L12.22 10.782V10.78Z' fill='white'/%3E%3C/svg%3E%0A" />
										</button>

										<div className={navstylemobile.NavbarContainer}>
											<div className={navstylemobile.resumeAndContact}>
												<Link
													href='mailto:eni.ajibode@gmail.com'
													className={navstylemobile.link}
												>
													<a className={navstylemobile.menuLinkContent}>
														{' '}
														Contact me{' '}
													</a>
												</Link>
											</div>

											<div className={navstylemobile.socials}>
												<Link
													href='https://www.linkedin.com/in/eniolaajibode/'
													className={navstylemobile.link}
												>
													<a> {linkedIn} </a>
												</Link>

												<Link
													href='https://www.instagram.com/ui.eniola/'
													className={navstylemobile.link}
												>
													<a className={navstylemobile.link}> {Instagram} </a>
												</Link>
												<Link
													href='https://www.behance.net/eniolaajibode1'
													className={navstylemobile.link}
												>
													<a className={navstylemobile.link}> {Behance} </a>
												</Link>
												<Link
													href='https://dribbble.com/Ajibode'
													className={navstylemobile.link}
												>
													<a className={navstylemobile.link}> {Dribble} </a>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className={navstylemobile.navstop}></div>
							</Modal>
						</div>

						<div className={navstyles.rightNav}>
							<div className={navstyles.beforeDivider}>
								<Link
									href='mailto:eni.ajibode@gmail.com'
									className={navstyles.link}
								>
									<button className={navstyles.menuLinkContent} id='navlink'>
										{' '}
										Contact me{' '}
									</button>
								</Link>
							</div>
							<img
								className={navstyles.divider}
								height={50}
								src="data:image/svg+xml,%3Csvg width='2' height='68' viewBox='0 0 2 68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V68' stroke='%23C4C4C4'/%3E%3C/svg%3E%0A"
							/>

							<div className={navstyles.afterDivider}>
								<Link
									href='https://www.linkedin.com/in/eniolaajibode/'
									className={navstyles.link}
								>
									<a> {linkedIn} </a>
								</Link>

								<Link
									href='https://www.instagram.com/ui.eniola/'
									className={navstyles.link}
								>
									<a> {Instagram} </a>
								</Link>
								<Link
									href='https://www.behance.net/eniolaajibode1'
									className={navstyles.link}
								>
									<a> {Behance} </a>
								</Link>
								<Link
									href='https://dribbble.com/Ajibode'
									className={navstyles.link}
								>
									<a> {Dribble} </a>
								</Link>

								{/*<a className={navstyles.menuLinkContent} >  Contact me </a>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
