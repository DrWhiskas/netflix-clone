import React from "react";
import "./mediaCard.css"

interface MediaCardProps {
    image: string
    title: string
}

export default function MediaCard({...props}: MediaCardProps){
    return (
			<article className="mediaCard">
				<img className="mediaCard__img" src={props.image} alt={props.title} />
				<div className="mediaCard__content">
					<h2 className="mediaCard__content__title">{props.title}</h2>
				</div>
			</article>
		);
}