import { Card, Row, Col } from "react-bootstrap";
import "./WhyUs.css";
import IconComplete from "../../Assets/Images/icon_complete.png";
import IconPrice from "../../Assets/Images/icon_price.png";
import IconClock from "../../Assets/Images/icon_24hrs.png";
import IconProfessional from "../../Assets/Images/icon_professional.png";

const WhyUs = () => {
	const cards = [
		{
			image: IconComplete,
			title: "Mobil Lengkap",
			text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat.",
		},
		{
			image: IconPrice,
			title: "Harga Murah",
			text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
		},
		{
			image: IconClock,
			title: "Layanan 24 Jam",
			text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.",
		},
		{
			image: IconProfessional,
			title: "Sopir Profesional",
			text: "Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu.",
		},
	];

	return (
		<section className="why-us" id="why-us">
			<div className="container px-0">
				<div className="why-us__text-wrap">
					<h3 className="why-us__title title fw-bold mb-3">
						Why Us?
					</h3>
					<p className="why-us__subtitle paragraph">
						Mengapa harus pilih Binar Car Rental?
					</p>
				</div>

				<Row md={4} className="mt-5">
					{cards.map((card, index) => (
						<Col key={index}>
							<Card className="why-us__card p-20 flex-column">
								<img
									className="why-us__card-image"
									src={card.image}
								/>
								<Card.Body className="p-0">
									<Card.Title className="why-us__card-title my-3">
										{card.title}
									</Card.Title>
									<Card.Text className="paragraph">
										{card.text}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</section>
	);
};

export default WhyUs;
