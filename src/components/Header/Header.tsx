import React from "react";
import './header.css'
export default function Header(){
    return (
			<header className="header">
					<div className="header__logo">NETFLIX</div>
					<ul className="header__nav">
						<li className="header__nav__links">
							<a className="header__nav__links__link" href="#">
								Home
							</a>
						</li>
						<li className="header__nav__links">
							<a className="header__nav__links__link" href="#">
								Series
							</a>
						</li>
						<li className="header__nav__links">
							<a className="header__nav__links__link" href="#">
								Films
							</a>
						</li>
						<li className="header__nav__links">
							<a className="header__nav__links__link" href="#">
								New & Popular
							</a>
						</li>
						<li className="header__nav__links">
							<a className="header__nav__links__link" href="#">
								My List
							</a>
						</li>
					</ul>
			</header>
		);
}