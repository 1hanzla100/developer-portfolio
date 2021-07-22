import React, {useState, createRef} from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col
} from "reactstrap"; 

import ColorThief from "colorthief";

import { Fade } from 'react-reveal';

const ExperienceCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    return ( 
        <Col lg="4">
        <Fade left duration={1000} distance="40px">
            <Card style={{flex: 1}} className="shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: rgb(colorArrays)}} >
                    <h5 className="text-white">{data.company}</h5>
                </CardHeader>
                <CardBody className="py-5">
                    <img ref={imgRef} className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg " src={data.companylogo} style={{ width: "100px" }} onLoad={() => getColorArrays()} alt=""/>
                    <CardTitle tag="h5">{data.role}</CardTitle>
                    <CardSubtitle>{data.date}</CardSubtitle>
                    <CardText className="description my-3 text-left">
                        {data.desc}
                        <ul>
                            {
                                data.descBullets ? 
                                data.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                    </CardText>
                    <div>
                    </div>
                </CardBody>
            </Card>
            </Fade>
        </Col>
     );
}
 
export default ExperienceCard;