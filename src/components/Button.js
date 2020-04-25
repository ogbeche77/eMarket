import styled from "styled-components";
 
//props.cart ? ensures color changes when item added to cart
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.2rem solid orange;
  border-color: ${props => (props.cart ? "orange" : "blue")}; 
  color: ${prop => (prop.cart ? "orange" : "blue")};
  border-radius: 0.5rem;
  paddding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => (prop.cart ? "grey" : "grey")};
  }
`;
