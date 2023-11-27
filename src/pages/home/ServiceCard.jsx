import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
  

const ServiceCard = ({service}) => {
    const {name,icon,description} = service || {};
    return (
      <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={icon}
          alt="service_image"
          className="w-full h-60"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
         {description}
        </Typography>
      </CardBody>
    </Card>
    );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;