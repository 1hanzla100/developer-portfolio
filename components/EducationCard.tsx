import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info">{schoolName}</h5>
            <h6>{subHeader}</h6>
            <Badge color="info" className="mr-1">
              {duration}
            </Badge>
            {grade && (
              <Badge color="primary" className="mr-1">
                {grade}
              </Badge>
            )}
            <p className="description mt-3">{desc}</p>
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
