import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	var idCounter = 0;
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/prime/HOL20_P1_GWH5/HOL_V2/GW/V2/primeholiday_gw_dt_tallhero_1500x600_holiday_engaged_en_v2._CB403512586_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id={1}
						title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
						rating={5}
					/>
					<Product
						id={2}
						title="All-new Ring Video Doorbell – 1080p HD video, improved motion detection, easy installation – Satin Nickel (2020 release)"
						price={69.99}
						image="https://brain-images-ssl.cdn.dixons.com/2/1/10207512/u_10207512.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						title="Miroco Electric Kettle Temperature Control Stainless Steel 1.7 L Tea Kettle, BPA-Free Hot Water Boiler Cordless with LED Light, Auto Shut-Off"
						price={45.99}
						image="https://m.media-amazon.com/images/I/41qTEBcfwcL._AC_SY240_.jpg"
						rating={5}
					/>
					<Product
						id={4}
						title="Zen Laboratory DIY Slime Kit Toy for Kids Girls Boys Ages 3-12, Glow in The Dark Glitter Slime Making Kit - Slime Supplies w/ Foam Beads Balls, 18 Mystery Box Containers Filled Crystal Powder Slime"
						price={23.95}
						image="https://images-na.ssl-images-amazon.com/images/I/61avThmC1rL._SCLZZZZZZZ___AC_SY200_.jpg"
						rating={5}
					/>
					<Product
						id={5}
						title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle, Light & Slim PS4 System, 1TB Hard Drive Charging Station Dock Bundle"
						price={499.0}
						image="https://m.media-amazon.com/images/I/610WTfW+iVL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id={6}
						title="SAMSUNG 75-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75TU8000FXZA, 2020 Model)"
						price={997.99}
						image="https://m.media-amazon.com/images/I/51EnjB8-xlL.__AC_SY200_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
