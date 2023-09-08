import styled from "styled-components";

const BlackjackGameContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.primary.dark}; /* Border color from theme */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export default BlackjackGameContainer;
