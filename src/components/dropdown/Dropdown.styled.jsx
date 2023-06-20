import styled, { css } from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 4px;
`;

const StyledDropDown = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const fontSizeClass = {
      main: "15px",
      sub: "13px",
    };
    const fontSize = fontSizeClass[props.type] || "13px";

    const fontColorClass = {
      main: "#518DFF",
    };
    const fontColor = fontColorClass[props.type] || "black";

    const fontWeightClass = {
      main: "800",
      sub: "600",
    };
    const fontWeight = fontWeightClass[props.type] || "300";

    const paddingTopClass = {
      main: "10px",
    };

    const paddingTop = paddingTopClass[props.type] || "4px";
    return css`
      button {
        font-size: ${fontSize};
        color: ${fontColor};
        font-weight: ${fontWeight};
        padding-top: ${paddingTop};
      }
    `;
  }};
`;

export { StyledButton, StyledDropDown };
