import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import { Typography, Rating, Button } from "@mui/material";
import { useStateValue } from "./Stateprovider";

const Product = forwardRef(({ details, price, image, id }, ref) => {
  const [numberofRate, setNumberofRate] = useState(0);
  const [{ basket }, dispatch] = useStateValue();
  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      items: {
        details: details,
        price: price,
        image: image,
        id: id,
        rate: numberofRate,
      },
    });
  }

  return (
    <Container ref={ref}>
      <ProductInfo>
        <p>{details}</p>
        <span>{`price : $${price}`}</span>
        <Typography>
          <Rating
            name="half-rating"
            precision={0.5}
            value={numberofRate}
            onChange={(e) => setNumberofRate(e.target.value)}
          ></Rating>
        </Typography>
      </ProductInfo>
      <img src={image} alt="" />
      <AddToCart onClick={addToBasket}>Add To Cart</AddToCart>
    </Container>
  );
});

export default Product;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  margin: 10px 20px;
  border-radius: 10px;
  z-index: 1;
  :hover {
    box-shadow: 0px 0px 10px 0px #000000;
    transform: scale(1.02);
    transition: 600ms;
  }
  @media screen and (max-width: 450px) {
    img {
      width: 200px;
    }
  }
`;
const ProductInfo = styled.div`
  p {
    font-size: 15px;
    letter-spacing: 1.3px;
    margin-bottom: 10px;
  }
  span {
    margin-top: 5px;
    font-weight: 550;
  }
`;
const AddToCart = styled(Button)`
  margin-top: 15px !important;
  margin-bottom: 5px !important;
  background-color: #f0c14b !important;
  color: black !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  width: fit-content !important;
  height: fit-content !important;
`;
