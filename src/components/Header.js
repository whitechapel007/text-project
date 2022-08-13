import React from "react";
import { Img, Button, Container } from "./header.styles";
import img from "../assets/Header Logo.svg";
const Header = () => {
  return (
    <>
      <Container normal>
        <Img src={img} alt="" />
        <Button> ANALYZE ASAs</Button>
      </Container>
      <Container>
        List of Algorand Standard Assets <br /> on ASAlytics
      </Container>
    </>
  );
};

export default Header;
