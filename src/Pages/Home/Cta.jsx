import React from "react";
import Button from "../../Components/button/Button";
import "./Cta.css";

const Cta = () => {
	return (
		<section className="cta">
			<div className="container px-0">
				<div className="cta-inner text-center">
					<h3 className="cta__title mb-3 fw-bold">
						Sewa Mobil di (Lokasimu) Sekarang
					</h3>
					<p className="cta__description mx-auto">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<a href="/cars">Mulai Sewa Mobil</a>
				</div>
			</div>
		</section>
	);
};

export default Cta;
