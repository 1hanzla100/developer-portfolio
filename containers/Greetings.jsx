import React, {useContext, useEffect} from "react";
import {greetings} from "../portfolio";

import {Button, Container, Row, Col} from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import {ThemeContext} from "../styles/theme/theme";
import SwitchTheme from "../components/switchTheme";

const Greetings = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    });
    const {theme , mode} = useContext(ThemeContext);
    const {textColor, oppositeTextColor, buttonColor , bgGradient} = theme;
    return (
        <main>
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <SwitchTheme/>
                    <div className={`shape shape-style-1 shape-z-index ${bgGradient}`}>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <Container className="py-lg-md d-flex">
                        <div className="col px-0">
                            <Row>
                                <Col lg="6">
                                    <h1 className={`display-3  ${oppositeTextColor}`}>
                                        {greetings.title + " "}
                                    </h1>
                                    <p className={`lead ${oppositeTextColor} `}>
                                        {greetings.description}
                                    </p>
                                    <SocialLinks/>
                                    <div className="btn-wrapper my-4">
                                        <Button
                                            className={`${buttonColor} btn-icon mb-3 mb-sm-0 ml-1`}
                                            color="default"
                                            href={greetings.resumeLink}
                                        >
											<span className={`btn-inner--icon mr-1 ${oppositeTextColor}`}>
												<i className="fa fa-file"/>
											</span>
                                            <span className={`btn-inner--text ${oppositeTextColor}`}>
												See My Resume
											</span>
                                        </Button>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <GreetingLottie animationPath="/lottie/coding.json"/>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 -0.5 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className={mode === "dark" ? "fill-darker" : "fill-white"}
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                {/* 1st Hero Variation */}
            </div>
        </main>
    );
};

export default Greetings;
