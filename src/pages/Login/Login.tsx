import React, { useEffect, useState } from "react";
import './login.css'
import { Link } from "react-router-dom";
export default function Login(){
    
    return (
			<section className="login">
				<h1 className="login__title">Who's watching?</h1>
				<ul className="login__list">
					<li className="login__list__container">
						<Link to='/home'>
							<img
								src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/06/12_Jinx.jpg"
								alt=""
								className="login__list__container__icon"
							/>
							<h2 className="login__list__container__name">username</h2>
						</Link>
					</li>
					<li className="login__list__container">
						<Link to='/home'>
							<img
								src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/06/12_Jinx.jpg"
								alt=""
								className="login__list__container__icon"
							/>
							<h2 className="login__list__container__name">username</h2>
						</Link>
					</li>
				</ul>
			</section>
		);
}