import React from "react";
import Header from "../../components/Header/Header";
import MediaCard from "../../components/MediaCard/MediaCard";
import "./home.css"
export default function Home(){
    return (
			<section className="home">
				<Header />
				<div className="home__container">
					<div className="home__container__content">
						<h2 className="home__container__content__title">Comic</h2>
						<div className="home__container__content__list">
							<MediaCard
								image="https://cdn.tatlerasia.com/tatlerasia/i/2024/05/07081328-gettyimages-2151786503_cover_1024x683.jpg"
								title="oui"
							/>
							<MediaCard
								image="https://cdn.tatlerasia.com/tatlerasia/i/2024/05/07081328-gettyimages-2151786503_cover_1024x683.jpg"
								title="oui"
							/>
							<MediaCard
								image="https://cdn.tatlerasia.com/tatlerasia/i/2024/05/07081328-gettyimages-2151786503_cover_1024x683.jpg"
								title="oui"
							/>
							<MediaCard
								image="https://cdn.tatlerasia.com/tatlerasia/i/2024/05/07081328-gettyimages-2151786503_cover_1024x683.jpg"
								title="oui"
							/>
							<MediaCard
								image="https://cdn.tatlerasia.com/tatlerasia/i/2024/05/07081328-gettyimages-2151786503_cover_1024x683.jpg"
								title="oui"
							/>
							<MediaCard
								image="https://cdn.tatlerasia.com/tatlerasia/i/2024/05/07081328-gettyimages-2151786503_cover_1024x683.jpg"
								title="oui"
							/>
                            
						</div>
					</div>
				</div>
			</section>
		);
}