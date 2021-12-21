import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: ${(props) => props.theme.sizes[9]};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.sizes[4]};
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: ${(props) => props.theme.sizes[9]};
  padding: ${(props) => props.theme.sizes[4]};
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: ${(props) => props.theme.sizes[2]} ${(props) => props.theme.sizes[3]};
  cursor: pointer;
`;
