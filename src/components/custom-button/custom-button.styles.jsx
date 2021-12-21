import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: ${(props) => props.theme.colors.button.background.primary};
  color: ${(props) => props.theme.colors.button.text.inverted};
  border: none;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.button.background.inverted};
    color: ${(props) => props.theme.colors.button.text.primary};
    border: ${(props) => props.theme.spaces[2]} solid
      ${(props) => props.theme.colors.button.background.primary};
  }
`;

const invertedButtonStyles = css`
  background-color: ${(props) => props.theme.colors.button.background.inverted};
  color: ${(props) => props.theme.colors.button.text.primary};
  border: ${(props) => props.theme.spaces[2]} solid
    ${(props) => props.theme.colors.button.background.primary};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.button.background.primary};
    color: ${(props) => props.theme.colors.button.text.inverted};
    border: none;
  }
`;

const GoogleSignInStyles = css`
  background-color: ${(props) => props.theme.colors.button.background.google};
  border: none;
  color: ${(props) => props.theme.colors.button.text.inverted};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.button.background.invertedGoogle};
    border: none;
    color: ${(props) => props.theme.colors.button.text.primary};
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: ${(props) => props.theme.sizes[12]};
  width: auto;
  height: ${(props) => props.theme.sizes[7]};
  letter-spacing: ${(props) => props.theme.spaces[1]};
  line-height: ${(props) => props.theme.sizes[7]};
  padding: 0 ${(props) => props.theme.sizes[5]} 0
    ${(props) => props.theme.sizes[5]};
  font-size: ${(props) => props.theme.fontSizes.body};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
