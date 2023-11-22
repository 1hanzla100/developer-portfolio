import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { CertificateType } from '../types/sections';

const CertificateCard = ({
  name,
  img,
  des,
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
            />
            <CardTitle tag="h4" className="mb-2">
              {name}
            </CardTitle>
            
            <CardText tag="div" className="description my-3 text-center">
              {des}
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default CertificateCard;
