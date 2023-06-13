import styled, { css } from "styled-components";

const StyledCalendar = styled.button``;

const CalendarStyle = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const lightblue = "#c8e4ff";
    // const red = "#ff4d7c";
    const black = "black";
    return css`
      display: flex;
      justify-content: center;
      .calendar {
        padding-top: 10px;
        height: 50vh;
        width: 100%;
        font-size: 1.5vh;
      }
      .calendar_head {
        display: flex;
        justify-content: center;
        height: 5%;
        align-items: center;
        margin-bottom: 20px;
        .calendar_button {
          cursor: pointer;
          margin: 5px;
          margin-right: 10px;
          margin-left: 10px;
          color: ${black};
          background: ${lightblue};
          padding: 0.375rem 0.75rem;
          border: 1px solid ${lightblue};
          border-radius: 5px;
        }
        .calendar_head_text {
          width: 18%;
          display: flex;
          justify-content: center;
          font-size: 2vw;
        }
      }

      .calendar_body {
        display: flex;
        width: 100%;
        height: 90%;
        .calendar_body_box {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .calendar_body_head {
            border-top: 3px solid ${lightblue};
            border-bottom: 3px solid ${lightblue};

            display: flex;
            .calendar_body_head_days {
              display: flex;
              justify-content: center;
              width: 100%;
              font-size: 2vw;
            }
          }

          .calendar_body_line {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            margin-bottom: 10px;
          }
        }
      }
    `;
  }};
`;
const Days_style = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const bgColor = props.colors.bgcolor ? "#ff4d7c" : "lightblue";
    let days_color = "white";
    return css`
      background-color: ${days_color};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      border: 2px solid ${bgColor};
      border-radius: 5px;
      margin: 5px;
      width: 100%;
      height: 100%;
      text-align: initial;
      font-size: 2vw;
      padding: 1px;
    `;
  }};
`;
export { StyledCalendar, Days_style, CalendarStyle };
