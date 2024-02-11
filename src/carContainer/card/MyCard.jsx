import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault({title,description,img,price}) {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={img}
            alt="card-image"
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
          <Button>{price}</Button>
        </CardFooter>
      </Card>
    );
  }