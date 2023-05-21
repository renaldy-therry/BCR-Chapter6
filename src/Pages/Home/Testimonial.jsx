import React from 'react'
import "./Testimonial.css";
import ImgPhoto from "../../Assets/Images/img_photo.png";
import Star from "../../Assets/Images/Star 1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonial = () => {
	const testimonials = [
		{
			photo: ImgPhoto,
			comment:
				"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
			name: "John Dee",
			age: 32,
			city: "Bromo",
		},
		{
			photo: ImgPhoto,
			comment:
				"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
			name: "John Dee",
			age: 32,
			city: "Bromo",
		},
		{
			photo: ImgPhoto,
			comment:
				"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
			name: "John Dee",
			age: 32,
			city: "Bromo",
		},
	];

	return (
		<section className="testimonial" id="testimonial">
			<div className="testimonial__text-wrap text-wrap d-flex flex-column">
				<h3 className="testimonial__title title text-center">
					Testimonial
				</h3>
				<p className="testimonial__subtitle text-wrap paragraph text-center">
					Berbagai review positif dari para pelanggan kami
				</p>
				<Swiper
					slidesPerView={"auto"}
					// centeredSlides={true}

					spaceBetween={20}
					// loop={true}
					// loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className="item d-flex align-items-center">
								<div className="image-wrap">
									<img src={testimonial.photo} alt="" />
								</div>
								<div className="right-wrap">
									<div className="icon-wrap d-flex">
										<img
											className="icon"
											src={Star}
											alt=""
										/>
										<img
											className="icon"
											src={Star}
											alt=""
										/>
										<img
											className="icon"
											src={Star}
											alt=""
										/>
										<img
											className="icon"
											src={Star}
											alt=""
										/>
										<img
											className="icon"
											src={Star}
											alt=""
										/>
									</div>
									<p className="paragraph">
										{testimonial.comment}
									</p>
									<p className="testimonial-name paragraph">
										{testimonial.name}, 32, Bromo
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonial;
