import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../components/Stateprovider";
import CheckoutItem from "../components/CheckoutItem";
import FlipMove from "react-flip-move";

const CheckoutPage = () => {
  const [{ basket }] = useStateValue();

  var basketPrice = [];

  basket?.map((item) => {
    basketPrice.push(item?.price);
    return basketPrice;
  });
  var totalPrice = basketPrice
    ?.map((total) => {
      return total;
    })
    .reduce((prePrice, total) => {
      return prePrice + total;
    }, 0);

  return (
    <Container>
      <TopPage>
        <LeftSide>
          <Banner image={"banner2.jpg"} />
        </LeftSide>
        <RightSide>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Total ({basket.length} Items) : <strong>{value}</strong>
                </p>
              </>
            )}
            value={totalPrice}
            decimalScale={2}
            displayType={"text"}
            thousandSeparator={true}
            prefix="$"
          />
        </RightSide>
      </TopPage>
      <BottomPage>
        {basket?.length > 0 ? (
          <FlipMove>
            {basket?.map((item) => {
              return (
                <CheckoutItem
                  key={item.id}
                  image={item.image}
                  details={item.details}
                  price={item.price}
                  rate={item.rate}
                  id={item.id}
                />
              );
            })}
          </FlipMove>
        ) : (
          <CartDetails>
            <img src="cart.gif" alt="" />
            <h1>Your Amazon Cart Is Empty</h1>
            <p>Shop Todays's Deals</p>
          </CartDetails>
        )}
      </BottomPage>
    </Container>
  );
};

export default CheckoutPage;
const Container = styled.div``;
const TopPage = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  flex: 0.7;
`;
const RightSide = styled.div`
  flex: 0.3;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;

  @media screen and (max-width: 800px) {
    padding: 50px 0px;
  }

  p {
    font-weight: 550;
  }
`;
const BottomPage = styled.div`
  margin-top: 20px;
`;
const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  align-items: center;
  text-align: center;
  img {
    width: 270px;
    border-radius: 200%;
  }
  h1 {
    margin: 10px 0px;
  }
`;
