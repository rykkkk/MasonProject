import React, { Component } from "react";

export class OPSHeader extends Component {
	render() {
		return (
			<div>
				<div className="ontario-header__container">
					<header
						className="ontario-application-header ontario-header"
						id="ontario-header">
						<div className="ontario-row">
							<div className="ontario-columns ontario-small-6 ontario-application-header__logo">
								<a href="https://www.ontario.ca/page/government-ontario">
									<img
										src="/MasonProject/src/components/ODS/logos/ontario-logo--desktop.svg"
										alt="Ontario.ca homepage"
									/>
								</a>
							</div>
							<div className="ontario-columns ontario-small-6 ontario-application-header__lang-toggle">
								<button className="ontario-header__language-toggler ontario-header-button ontario-header-button--without-outline">
									Fran&ccedil;ais
								</button>
							</div>
						</div>
					</header>
					<div className="ontario-application-subheader-menu__container">
						<section className="ontario-application-subheader">
							<div className="ontario-row">
								<div className="ontario-columns ontario-small-12 ontario-application-subheader__container">
									<p className="ontario-application-subheader__heading">
										<a href="/">All Things Movies and TV</a>
									</p>

									<div className="ontario-application-subheader__menu-container">
										<ul className="ontario-application-subheader__menu ontario-show-for-large">
	
										</ul>
										<ul className="ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large">
							
										</ul>
										<button
											className="ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline"
											id="ontario-header-menu-toggler"
											aria-controls="ontario-navigation"
											aria-label="Show navigation menu"
											type="button">
											<svg
												className="ontario-icon"
												focusable="false"
												viewBox="0 0 24 24"
												preserveAspectRatio="xMidYMid meet">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													fill="none">
													<path
														fill="#000"
														d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
												</svg>{" "}
											</svg>
											<span>Menu</span>
										</button>
									</div>
								</div>
							</div>
						</section>
						<nav className="ontario-navigation" id="ontario-navigation">
							<button
								className="ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline"
								id="ontario-header-nav-toggler"
								aria-controls="ontario-navigation"
								aria-label="Hide navigation menu">
								<svg
									className="ontario-icon"
									focusable="false"
									viewBox="0 0 24 24"
									preserveAspectRatio="xMidYMid meet">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none">
										<path
											fill="#000"
											d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z"></path>
									</svg>
								</svg>
								<span>Menu</span>
							</button>
							<div className="ontario-navigation__container">
								
							</div>
						</nav>
					</div>
				</div>
				<div className="ontario-overlay"></div>
			</div>
		);
	}
}

export class OPSFooter extends Component {
	render() {
		return (
			<footer className="ontario-footer ontario-footer--default">
				<div className="ontario-row">
					<div className="ontario-columns ontario-small-12">
						<ul className="ontario-footer__links-container ontario-footer__links-container--inline">
							<li>
								<a
									className="ontario-footer__link"
									href="https://www.ontario.ca/page/accessibility">
									Accessibility
								</a>
							</li>
							<li>
								<a
									className="ontario-footer__link"
									href="https://www.ontario.ca/page/privacy-statement">
									Privacy
								</a>
							</li>
							<li>
								<a className="ontario-footer__link" href="/">
									Contact us
								</a>
							</li>
						</ul>
						<div className="ontario-footer__copyright">
							<a
								className="ontario-footer__link"
								href="https://www.ontario.ca/page/copyright-information">
								&copy; King's Printer for Ontario,
								<span className="ontario-nbsp">2012&ndash;24</span>
							</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
