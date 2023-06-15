import styled, { css } from "styled-components";

const StyledCalendar = styled.button``;

const CalendarStyle = styled.div.attrs((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .calendar {
        padding-top: 10px;
        /* width: 56vh; */
        width: 90%;
        height: 90%;
        aspect-ratio: 1/1;

        font-size: 1.5vh;
      }
      .calendar_head {
        display: flex;
        /* justify-content: center; */
        justify-content: space-between;

        height: 10%; // 5
        align-items: center;
        margin-bottom: 20px;
        .calendar_button {
          cursor: pointer;
          /* margin: 1px; */
          background: white;
        }
        .calendar_head_text {
          display: flex;
          /* justify-content: center; */
          font-size: 1vh;
          /* margin: 0 10%; */
        }
      }

      .calendar_body {
        display: flex;
        width: 100%;
        height: 90%;

        .calendar_body_box {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          .calendar_body_head {
            display: flex;
            .calendar_body_head_days {
              display: flex;
              justify-content: center;
              width: 100%;
              font-size: 1vw;
              margin-bottom: 10px;
              .calendar_body_head_day {
                border: 1.4px solid #abc8ff;
                border-radius: 10px;
                padding: 5px;
              }
            }
          }

          .calendar_body_line {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            margin-bottom: 22px;
          }
        }
      }
    `;
  }};
`;
const Days_style = styled.div.attrs((props) => ({}))`
  ${(props) => {
    let days_color = "white";
    return css`
      background-color: ${days_color};
      cursor: pointer;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 2px;
      width: 100%;
      height: 100%;
      font-size: 1vw;

      /* padding: 5px 10px; */
    `;
  }};
`;

const Day_style = styled.span.attrs((props) => ({}))`
  ${(props) => {
    const bgColor = props.colors.bgcolor ? "#FFCCEF" : "white";
    const textColor = props.colors.color;
    // console.log(bgColor);
    return css`
      background-color: ${bgColor};
      border: 1.5px solid ${bgColor};
      color: ${textColor};
      border-radius: 50%;
      width: 100%;
      padding: 4%;
    `;
  }};
`;

export { StyledCalendar, Days_style, CalendarStyle, Day_style };
