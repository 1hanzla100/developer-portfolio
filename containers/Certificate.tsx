import React from 'react';
import { certificates } from '../portfolio';
import { Container, Row } from 'reactstrap';
import CertificateCard from '../components/CertificateCard';

const Certificate = () => {
  return (
    certificates && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-certificate text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Certificates</h4>
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {certificates.map((data, i) => {
              return <CertificateCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Certificate;
