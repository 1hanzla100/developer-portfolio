import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { Fade } from "react-reveal";

const Feedbacks = () => {
	return feedbacks && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="fa fa-star text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">
							Our Clients Feedback
						</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{feedbacks.map((data, i) => {
						return (
							<Col key={i} lg={6}>
								<FeedbackCard data={data} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Feedbacks;
