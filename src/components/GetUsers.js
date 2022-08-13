import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Container, Img, MainContainer, Loader } from "./home.styles";
import { LOAD_USERS } from "../Graphql/Queries";
import img from "../assets/bitcoin-ic 1.svg";
const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);

  console.log(data);
  if (loading) return <Loader></Loader>;
  if (error) return <div>error...</div>;

  return (
    <MainContainer>
      {data.asalist.results
        .map(({ logo, available, name }) => (
          <Container>
            <Img src={logo || img} />
            {name || "Algorand"}
            <Button available={available}>
              {available ? "Available" : "Unavailable"}
            </Button>
          </Container>
        ))
        .slice(0, 16)}
    </MainContainer>
  );
};

export default GetUsers;
