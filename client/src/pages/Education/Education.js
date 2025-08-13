import React from "react";
import { MdSchool } from "react-icons/md";
import { Chrono } from "react-chrono";
import "./education.css";

const items = [
  {
    title: "2020 - 2022",
    cardTitle: "MCA",
    cardSubtitle: "IIT Mumbai, IN",
    cardDetailedText: "",
    icon: <MdSchool />,
  },
  {
    title: "2017 - 2020",
    cardTitle: "BCA",
    cardSubtitle: "IIT Mumbai, IN",
    cardDetailedText: "",
    icon: <MdSchool />,
  },
];

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <Chrono
          items={items}
          mode="VERTICAL"
          theme={{
            primary: "#138781",
            secondary: "white",
            cardBgColor: "white",
            cardForeColor: "#138781",
          }}
          cardHeight={100}
        />
      </div>
    </>
  );
};

export default Education;