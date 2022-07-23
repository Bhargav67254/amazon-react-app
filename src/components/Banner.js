import React from "react";
import styled from "styled-components";

const Banner = ({ image }) => {
  return (
    <Container>
      <img src={image} alt="" />
    </Container>
  );
};

export default Banner;
const Container = styled.div`
  margin-bottom: -35px;
  img {
    z-index: -1;
    width: 100%;
    object-fit: contain;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;
