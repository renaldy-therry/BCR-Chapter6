import "./Hero.css";
import MercedesCar from "../../Assets/Images/MercedesCar.png";
import Button from "../../Components/button/Button";

const Hero = () => {
	return (
		<section className="main">
			<div className="container px-0">
				<div className="row mr-n4">
					<div className="col my-auto">
						<h1 className="main-title fw-bold">
							Sewa &amp; Rental Mobil Terbaik di kawasan
							(Lokasimu)
						</h1>
						<p className="main-description paragraph my-3">
							Selamat datang di Binar Car Rental. Kami menyediakan
							mobil kualitas terbaik dengan harga terjangkau.
							Selalu siap melayani kebutuhanmu untuk sewa mobil
							selama 24 jam.
						</p>
						<Button text="Mulai Sewa Mobil" to="/cars" />
					</div>
					<div className="main__image-wrap col-7">
						<img
							className="main__image"
							src={MercedesCar}
							alt="Mercedes" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
