import styled from "styled-components";

export const SignContainer = styled.div`
  width: ${(props) => props.theme.sizes[19]};
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  margin: ${(props) => props.theme.sizes[4]} 0;
`;
