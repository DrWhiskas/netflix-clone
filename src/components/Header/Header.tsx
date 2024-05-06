import React from "react";
import './header.css'
import { Search, Bell, ChevronDown } from "lucide-react";
export default function Header(){
    return (
			<header className="header">
				<div className="nav">
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
							New&Popular
						</a>
					</li>
					<li className="header__nav__links">
						<a className="header__nav__links__link" href="#">
							List
						</a>
					</li>
				</ul>
				</div>
				<ul className="header__nav profil">
					<li className="header__nav__links">
						<Search className="white" />
					</li>
					<li className="header__nav__links">
						<a className="header__nav__links__link" href="#">
							Kids
						</a>
					</li>
					<li className="header__nav__links">
						<Bell className="white" />
					</li>
					<li className="header__nav__links">
						<img
							src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/06/12_Jinx.jpg"
							alt="icon"
							className="header__list__container__icon"
						/>
						<ChevronDown className="white arrow" />
					</li>
				</ul>
			</header>
		);
}