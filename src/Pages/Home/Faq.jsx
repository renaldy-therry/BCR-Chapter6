import React from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
	const questions = [
		{
			title: "Apa saja syarat yang dibutuhkan?",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolor aperiam quos a perspiciatis excepturi error distinctio eveniet tempore accusantium. Fugit accusamus totam molestiae sunt neque, facilis quis omnis error porro odio officia. Molestiae quia aliquid assumenda modi eligendi voluptate.",
		},
		{
			title: "Berapa hari minimal sewa mobil lepas kunci?",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolor aperiam quos a perspiciatis excepturi error distinctio eveniet tempore accusantium. Fugit accusamus totam molestiae sunt neque, facilis quis omnis error porro odio officia. Molestiae quia aliquid assumenda modi eligendi voluptate.",
		},
		{
			title: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolor aperiam quos a perspiciatis excepturi error distinctio eveniet tempore accusantium. Fugit accusamus totam molestiae sunt neque, facilis quis omnis error porro odio officia. Molestiae quia aliquid assumenda modi eligendi voluptate.",
		},
		{
			title: "Apakah ada biaya antar-jemput?",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolor aperiam quos a perspiciatis excepturi error distinctio eveniet tempore accusantium. Fugit accusamus totam molestiae sunt neque, facilis quis omnis error porro odio officia. Molestiae quia aliquid assumenda modi eligendi voluptate.",
		},
		{
			title: "Bagaimana jika terjadi kecelakaan?",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolor aperiam quos a perspiciatis excepturi error distinctio eveniet tempore accusantium. Fugit accusamus totam molestiae sunt neque, facilis quis omnis error porro odio officia. Molestiae quia aliquid assumenda modi eligendi voluptate.",
		},
	];
	return (
		<section className="faq" id="faq">
			<div className="container">
				<div className="row">
					<div className="col pt-3">
						<h3 className="title mb-3 fw-bold">
							Frequently Asked Question
						</h3>
						<p className="paragraph">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</p>
					</div>
					<div className="col">
						<Accordion alwaysOpen>
							{questions.map((question, index) => (
								<Accordion.Item key={index} eventKey={index}>
									<Accordion.Header className="paragraph">
										{question.title}
									</Accordion.Header>
									<Accordion.Body className="paragraph">
										{question.body}
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
