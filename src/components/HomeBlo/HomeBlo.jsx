import React from "react";
import { Button, Card } from "react-bootstrap";
let products = [
  {
    title: "Speedracer multifunction watch with Ferrari FXX K 1:43 scale model",
    image:
      "https://i.pinimg.com/564x/c2/40/92/c240927e4806cfc745f9128ab5cc41b1.jpg",
    price: "175",
    id: 1,
  },
  {
    title: "Matt black Aspire chronograph watch with steel strap",
    image:
      "https://i.pinimg.com/564x/84/ed/ff/84edffdf2ea3418961a54658f9a277e3.jpg",
    price: "295",
    id: 2,
  },
  {
    title: "Matt grey Aspire chronograph watch with steel strap",
    image:
      "https://i.pinimg.com/564x/c8/8a/c7/c88ac79609185a2a1b3fd4fd209957ce.jpg",
    price: "150",
    id: 3,
  },
  {
    title: "Matt black Aspire chronograph watch with rose gold details",
    image:
      "https://i.pinimg.com/564x/dd/16/dd/dd16dd73214435f3d5cbbe9c53a5bf93.jpg",
    price: "200",
    id: 4,
  },
];
const HomeBlo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "10%",
      }}
    >
      {products.map((item) => (
        <Card key={item.id} style={{ width: "18rem", margin: "1rem" }}>
          <Card.Img
            style={{ height: "367px", objectFit: "cover" }}
            variant="top"
            src={item.image}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default HomeBlo;
