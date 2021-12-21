import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: ${(props) =>
    props.size ? props.theme.sizes[19] : props.theme.sizes[16]};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.spaces[2]} solid
    ${(props) => props.theme.colors.button.background.primary};
  margin: 0 ${(props) => props.theme.spaces[5]}
    ${(props) => props.theme.spaces[6]};
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: ${(props) => props.theme.spaces[5]};
  }
  &:last-child {
    margin-left: ${(props) => props.theme.spaces[5]};
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Content = styled.div`
  height: ${(props) => props.theme.sizes[10]};
  padding: 0 ${(props) => props.theme.spaces[6]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.spaces[2]} solid
    ${(props) => props.theme.colors.button.background.primary};
  background-color: ${(props) => props.theme.colors.button.background.inverted};
  opacity: 0.7;
  position: absolute;
`;

export const Title = styled.span`
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spaces[4]};
  font-size: ${(props) => props.theme.sizes[4]};
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: ${(props) => props.theme.sizes[3]};
`;
