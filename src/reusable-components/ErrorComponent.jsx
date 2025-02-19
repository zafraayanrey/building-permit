import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.span`
  color: red;
  font-size: 9px;
`;

function ErrorComponent({ children }) {
  return <ErrorContainer>Write if N/A if not applicable</ErrorContainer>;
}

export default ErrorComponent;
