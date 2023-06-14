import styled, { css } from "styled-components";

const StyledCalendar = styled.button``;

const CalendarStyle = styled.div.attrs((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      justify-content: center;
      .calendar {
        padding-top: 10px;
        /* height: 56vh; */
        width: 56vh;
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
          background: white;
        }
        .calendar_head_text {
          display: flex;
          justify-content: center;
          font-size: 2vw;
          margin: 0 20%;
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
            display: flex;
            .calendar_body_head_days {
              display: flex;
              justify-content: center;
              width: 100%;
              font-size: 1.5vw;

              .calendar_body_head_day {
                border: 2px solid #abc8ff;
                border-radius: 10px;
                padding: 5px 10px;
              }
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
    // const bgColor = props.colors.bgcolor ? "#ff4d7c" : "white";
    let days_color = "white";
    return css`
      background-color: ${days_color};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      margin: 5px;
      width: 100%;
      height: 100%;
      /* text-align: initial; */
      font-size: 1.5vw;
      padding: 1px;
    `;
  }};
`;

const Day_style = styled.span.attrs((props) => ({}))`
  ${(props) => {
    const bgColor = props.colors.bgcolor ? "#FFCCEF" : "white";
    // console.log(bgColor);
    return css`
      background-color: ${bgColor};
      border: 1.5px solid ${bgColor};
      border-radius: 50%;
    `;
  }};
`;

export { StyledCalendar, Days_style, CalendarStyle, Day_style };
