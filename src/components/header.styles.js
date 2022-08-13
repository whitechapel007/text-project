import styled from "styled-components";

const Img = styled.img``;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 30px;

  gap: 10px;

  background: #000000;
  border-radius: 8px;

  /* Inside auto layout */
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => (props.normal ? " space-between" : "center")};
  align-items: center;
  padding: ${(props) => (props.normal ? " 25px" : "20px")};
  margin-inline: auto;
  background: #f2fbf6;
  padding-bottom: 30px;
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  text-align: center;

  color: #000000;
`;
export { Img, Button, Container };
