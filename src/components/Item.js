import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Item = () => {
  return (
    <Container>
      <Row>
        <Product
          details={`2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Gray`}
          price={2700}
          image={"images/item6.jpg"}
          id={1}
        />
        <Product
          details={`
        MSI GE76 Raider Gaming Laptop Intel Core i7-11800H, GeForce RTX 3060, 17.3" FHD 144HZ, 32GB RAM2TB NVMe SSD, Wi-Fi6, Windows 10
        `}
          price={2229}
          image={"images/item2.jpg"}
          id={2}
        />
      </Row>
      <Row>
        <Product
          details={`Alienware m15 R4 RTX 3070 Gaming Laptop Full HD (FHD), 15.6 inch - Intel Core i7-10870H, 16GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3070 8GB GDDR6, Windows 10 Home - Lunar Light`}
          price={2174}
          image={"images/item3.jpg"}
          id={3}
        />
        <Product
          details={`Razer Blade 15 Advanced Gaming Laptop 2021: Intel Core i7-11800H 8-Core, NVIDIA GeForce RTX 3070, 15.6” QHD 165Hz, 16GB RAM, 1TB SSD - CNC Aluminum - Chroma RGB - THX Spatial Audio - Thunderbolt 3`}
          price={2599}
          image={"images/item4.jpg"}
          id={4}
        />
        <Product
          details={`ASUS ROG Zephyrus S17 Gaming Laptop, 300Hz 17.3" FHD 3ms IPS Level, Intel Core i7-10875H, NVIDIA GeForce RTX 2080 Super, 32GB DDR4, 1TB PCIe SSD, Wi-Fi 6, Per-Key RGB, Windows 10 Pro, GX701LXS-XS78`}
          price={4599}
          image={"images/item5.jpg"}
          id={5}
        />
      </Row>
      <Row>
        <Product
          details={` GIGABYTE AORUS 15P XD - 15.6" FHD IPS Anti-Glare 240Hz, Intel Core
          i7-11800H, NVIDIA GeForce RTX 3070 Laptop GPU 8GB GDDR6, 16GB Memory,
          1TB SSD, Win11 Home, Gaming Laptop (AORUS 15P XD-73US224SO)`}
          price={1299}
          image={"images/item1.jpg"}
          id={6}
        />
      </Row>
    </Container>
  );
};

export default Item;
const Container = styled.div``;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1090px) {
    flex-direction: column;
  }
`;
