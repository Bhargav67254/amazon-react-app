import React, { forwardRef } from "react";
import styled from "styled-components";
import { Typography, Rating, Button } from "@mui/material";
import { useStateValue } from "./Stateprovider";

const CheckoutItem = forwardRef(({ image, details, price, rate, id }, ref) => {
  const [{ basket }, dispatch] = useStateValue();

  function RemoveItems() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }

  return (
    <Container ref={ref}>
      <LeftSide>
        <img src={image} alt="" />
      </LeftSide>
      <RightSide>
        <p>{details}</p>
        <span>{`price : $ ${price}`}</span>
        <Typography>
          <Rating
            name="read-only"
            readOnly={true}
            precision={0.5}
            value={rate}
          ></Rating>
        </Typography>
        <RemoveButton onClick={RemoveItems}>Remove from cart</RemoveButton>
      </RightSide>
    </Container>
  );
});

export default CheckoutItem;

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
`;
const LeftSide = styled.div`
  margin-right: 15px;
  img {
    width: 270px;
    object-fit: contain;
    border-radius: 5px;
  }
  @media screen and (max-width: 600px) {
    margin-right: 0px;
  }
`;
const RightSide = styled.div`
  p {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  span {
    font-weight: 550;
    margin-top: 5px;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #f0c14b !important;
  color: black !important;
  font-size: 12px !important;
  font-weight: 500 !important;
`;
