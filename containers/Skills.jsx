import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
	return (
		<Container className="text-center my-5 section section-lg">
			<h1 className="h1">{skillsSection.title}</h1>
			<p className="lead">{skillsSection.subTitle}</p>
			{skillsSection.data.map((section, index) => {
				return (
					<Row className="my-5" key={index}>
						<Col lg="6">
							<Fade left duration={2000}>
								<DisplayLottie
									animationPath={section.lottieAnimationFile}
								/>
							</Fade>
						</Col>
						<Col lg="6">
							<Fade right duration={2000}>
								<h3 className="h3 mb-2">{section.title}</h3>
								<div className="d-flex justify-content-center flex-wrap mb-2">
									{section.softwareSkills.map((skill, i) => {
										return (
											<Fragment key={i}>
												<div
													className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
													id={skill.skillName.replace(/\s/g, '')}
												>
													<Icon
														icon={
															skill.fontAwesomeClassname
														}
														data-inline="false"
													></Icon>
												</div>
												<UncontrolledTooltip
													delay={0}
													placement="bottom"
													target={skill.skillName.replace(/\s/g, '')}
												>
													{skill.skillName}
												</UncontrolledTooltip>
											</Fragment>
										);
									})}
								</div>
								<div>
									{section.skills.map((skill, i) => {
										return <p key={i}>{skill}</p>;
									})}
								</div>
							</Fade>
						</Col>
					</Row>
				);
			})}
			{/* <Row>
					<Col lg="6">
						<DisplayLottie animationPath="/lottie/webdev.json" />
					</Col>
					<Col lg="6">
						<div className="d-flex justify-content-center flex-wrap mb-5">
							{skillsSection.softwareSkills.map((skill) => {
								return (
									<Fragment key={skill.skillName}>
										<div
											className="icon icon-lg icon-shape shadow rounded-circle mb-5"
											id={skill.skillName}
										>
											<Icon
												icon={
													skill.fontAwesomeClassname
												}
												data-inline="false"
											></Icon>
										</div>
										<UncontrolledTooltip
											delay={0}
											placement="bottom"
											target={skill.skillName}
										>
											{skill.skillName}
										</UncontrolledTooltip>
									</Fragment>
								);
							})}
						</div>
						<div>
							{skillsSection.skills.map((skill) => {
								return <p key={skill}>{skill}</p>;
							})}
						</div>
					</Col>
				</Row> */}
		</Container>
	);
};

export default Skills;
