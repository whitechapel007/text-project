import styled from "styled-components";

const Img = styled.img`
  width: 30%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;

  color: #000000;

  border: 1px solid #b7becc;
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 30px;

  /* Inside auto layout */
`;
const Button = styled.button`
  padding: 8px;

  background: ${({ available }) => (available ? "#6FD791" : "#BC3131")};
  color: white;
  border-radius: 8px;
  border: 0;
  cursor: pointer;

  /* Inside auto layout */
`;

const MainContainer = styled.div`
  display: grid;
  grid-gap: 1.6rem;

  background: #f2fbf6;
  padding: 1rem;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
export { Button, Img, Container, MainContainer };
