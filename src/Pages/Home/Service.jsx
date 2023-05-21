import ImgService from "../../Assets/Images/img_service.png";
import CheckIcon from "../../Assets/Images/Ellipse 22.png";
import "./Service.css";

const Service = () => {
	const lists = [
		{
			message: "Sewa Mobil Dengan Supir di Bali 12 Jam",
		},
		{
			message: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
		},
		{
			message: "Sewa Mobil Jangka Panjang Bulanan",
		},
		{
			message: "Gratis Antar - Jemput Mobil di Bandara",
		},
		{
			message: "Layanan Airport Transfer / Drop In Out",
		},
	];

	return (
		<section className="service" id="service">
			<div className="container px-0">
				<div className="row justify-content-center">
					<div className="service__image-wrap col-5">
						<img
							className="service__image"
							src={ImgService}
							alt="Happy Girl"
						/>
					</div>
					<div className="col-5">
						<h3 className="service__title mb-4 title fw-bold">
							Best Car Rental for any kind of trip in (Lokasimu)!
						</h3>
						<p className="service__description mb-3 paragraph">
							Sewa mobil di (Lokasimu) bersama Binar Car Rental
							jaminan harga lebih murah dibandingkan yang lain,
							kondisi mobil baru, serta kualitas pelayanan terbaik
							untuk perjalanan wisata, bisnis, wedding, meeting,
							dll.
						</p>
						<ul className="service__list d-flex flex-column ps-0">
							{lists.map((list, index) => (
								<li
									className="service__item d-flex align-items-center"
									key={index}>
									<img src={CheckIcon} alt="check icon" aria-label="true" />
									<p className="mb-0">{list.message}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
