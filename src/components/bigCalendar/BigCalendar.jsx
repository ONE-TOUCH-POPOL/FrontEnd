/* eslint-disable */
import React, { useState } from "react";
import { CalendarStyle, StyledCalendar, Days_style } from "./BigCalendar.styled";
import moment from "moment";

const Day_kor = () => {
  return (
    <>
      <div className="calendar_body_head">
        <div style={{ color: "red" }} className="calendar_body_head_days">
          일
        </div>
        <div className="calendar_body_head_days">월</div>
        <div className="calendar_body_head_days">화</div>
        <div className="calendar_body_head_days">수</div>
        <div className="calendar_body_head_days">목</div>
        <div className="calendar_body_head_days">금</div>
        <div className="calendar_body_head_days">토</div>
      </div>
    </>
  );
};

const BigCalendarComp = ({ time }) => {
  // 날짜 변수 선언
  const today = time;
  time = moment();
  // 첫주를 찾기 위한 변수
  const firstWeek = today.clone().startOf("month").week();
  // 마지막주를 찾기 위한 변수
  const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();
  // 리턴하기 위한 배열
  let Result = [];
  let week = firstWeek;

  // 실제 달력을 컴포넌트를 만드는 함수
  for (week; week <= lastWeek; week++) {
    Result = Result.concat(
      <div className="calendar_body_line" key={week}>
        {Array(7)
          .fill(0)
          .map((data, index) => {
            let days = today.clone().startOf("year").week(week).startOf("week").add(index, "day"); //d로해도되지만 직관성
            let colors = {
              bgcolor: false, // 해당하는 날 배경 색
              color: "black", // 날짜 숫자 글자 색
            };
            // 조건에 다라 해당날짜 css를 변경
            if (time.format("YYYYMMDD") === days.format("YYYYMMDD")) {
              colors.bgcolor = true;
              colors.color = "red";
            } else if (days.format("MM") !== today.format("MM")) {
              colors.color = "gray";
            }

            return (
              <Days_style colors={colors} key={index}>
                <span style={{ color: colors.color }}>{days.format("D")}</span>
              </Days_style>
            );
          })}
      </div>
    );
  }
  return <>{Result}</>;
};

const BigCalendar = ({ ...props }) => {
  const [today, setMoment] = useState(moment());
  return (
    <CalendarStyle {...props}>
      <div className="calendar">
        <div className="calendar_head">
          <button
            className="calendar_button"
            onClick={() => {
              setMoment((prev) => prev.clone().subtract(1, "month"));
            }}
          >
            이전달
          </button>
          <div className="calendar_head_text">{today.format("YYYY 년 MM 월")}</div>
          <button
            className="calendar_button"
            onClick={() => {
              setMoment((prev) => prev.clone().add(1, "month"));
            }}
          >
            다음달
          </button>
        </div>
        <div className="calendar_body">
          <div className="calendar_body_box">
            <Day_kor />
            <BigCalendarComp time={today} />
          </div>
        </div>
      </div>
    </CalendarStyle>
  );
};

export default BigCalendar;
