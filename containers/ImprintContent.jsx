import React, { useEffect } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    });
    return (
        <main>
            <div className="position-relative">
                <section className="section section-lg section-shaped ">
                    <div className="shape shape-style-1 bg-gradient-info">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>

                <Container style={{ padding: "50px 0" }} className="py-lg-md d-flex">
                    <div className="col px-0">
                        <h1>Legal Notice</h1>

                        <h2>Liability and information according to § 5 TMG</h2>
                        <p>Tarik Ermis<br />
                            Software Developer<br />
                            Richard-Wagner-Stra&szlig;e 4<br />
                            66333 V&ouml;lklingen</p>

                        <h2>Contact</h2>
                        <p>Mobile: +49 (0) 15737532227<br />
                            Email: admin@fujin-solutions.com</p>


                    </div>
                </Container>

                {/* 1st Hero Variation */}
            </div>
        </main>
    );
};

export default Greetings;
