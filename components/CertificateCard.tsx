import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { CertificateType } from '../types/sections';

const CertificateCard = ({
  name,
  img,
}: CertificateType) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={img}
              style={{
                objectFit: 'cover',
                left: 0,
                right: 0,
                top: '7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '28rem',
                height: '18rem',
                borderRadius: '5%',
              }}
            //   className="shadow mb-3"
            //   alt={companyLogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {name}
            </CardTitle>
            {/* <CardSubtitle tag="h5" className="mb-2">
              {role}
            </CardSubtitle> */}
            {/* <CardSubtitle>{date}</CardSubtitle> */}
            {/* <CardText tag="div" className="description my-3 text-left">
              {desc}
              <ul>
                {descBullets
                  ? descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText> */}
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default CertificateCard;
