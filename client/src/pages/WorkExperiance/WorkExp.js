import React from "react";
import { SiReact } from "react-icons/si";
import { Chrono } from "react-chrono";
import "./WorkExp.css";

const items = [
  {
    title: "2023 - present",
    cardTitle: "Full Stack Developer",
    cardSubtitle: "xyz, pvt ltd",
    cardDetailedText: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    // You can add icon if needed
  },
  {
    title: "2020 - 2022",
    cardTitle: "Full Stack Developer",
    cardSubtitle: "xyz, pvt ltd",
    cardDetailedText: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    title: "2018 - 2020",
    cardTitle: "Full Stack Developer",
    cardSubtitle: "xyz, pvt ltd",
    cardDetailedText: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
];

const WorkExp = () => {
  return (
    <div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <Chrono
          items={items}
          mode="VERTICAL"
          theme={{
            primary: "#1e1e2c",
            secondary: "white",
            cardBgColor: "white",
            cardForeColor: "#1e1e2c",
          }}
        />
      </div>
    </div>
  );
};

export default WorkExp;