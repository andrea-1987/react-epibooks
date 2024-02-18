import React, { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import styles from './card.module.css';

export function CardDefault({ title, description, img, price, asin }) {
  const bordered = useRef(null);


  const handleClickToBorder = () => {
    bordered.current.classList.toggle(styles.borderCard);
  };

  const handleButton = () => {
  window.location.href= `/book/${asin}`;
  };

  return (
    <Card className={`mt-6 w-96 ${styles.myCard}`} ref={bordered} onClick={handleClickToBorder}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={img}
          alt={title}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="pb-5">{price}</div>
        <Button onClick={handleButton}>Dettagli</Button>
      </CardFooter>
    </Card>
  );
}
