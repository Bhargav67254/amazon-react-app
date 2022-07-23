import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Item from "../components/Item";

const HomePage = () => {
  return (
    <Container>
      <Banner image={"banner1.jpg"} />
      <Item />
    </Container>
  );
};

export default HomePage;
const Container = styled.div`
  z-index: -1;
  padding: 0px 5px;
  padding-bottom: 20px;
`;
