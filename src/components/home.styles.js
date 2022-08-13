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

const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #6fd791; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 30%;
  right: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    left: 45%;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export { Button, Img, Container, MainContainer, Loader };
