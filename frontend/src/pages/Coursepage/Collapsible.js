import React, { useState, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/all";
const Collapsible = ({ section, isaccessable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();
  if (parentRef.current) console.log(parentRef.current.scrollHeight);

  const disableclick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="courseContent">
      <div className="contentC" onClick={() => setIsOpen(!isOpen)}>
        <div className="iconCourseC">
          {!isOpen ? (
            <RiArrowDownSLine size="20" className="iconArrowDown" />
          ) : (
            <RiArrowUpSLine size="20" className="iconArrowDown" />
          )}{" "}
          <b>{section.name}</b>
        </div>
        <div className="nbrSessionsCourseC">
          <i>x sessions / x min</i>
        </div>
      </div>

      <div
        className="contentOfSections-parent"
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : { height: "0px" }
        }
      >
        <div className="contentOf">
          <div className="sessionsContent">
            <div className="sessionName">
              {section.lectures.map((lecture, index) => {
                if (isaccessable) {
                  return (
                    <a
                      href={lecture.link}
                      rel="noreferrer"
                      target="_blank"
                      className="session"
                    >
                    <i class="ri-arrow-right-s-fill"></i> Lecture: {index}  <span class="span">{lecture.name}</span>
                    </a>
                  );
                } else {
                  return (
                    <p>
                    <i class="ri-arrow-right-s-fill"></i> Lecture: {index} <span>{lecture.name}</span>
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
