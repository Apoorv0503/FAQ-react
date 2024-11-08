import React from "react";
import "./Sidebar.css";

const Sidebar = ({ data, activeSection, onSidebarClick }) => {
  return (
    <div id="sidebar-container">
      <nav aria-label="sidebar">
        {data.map((topic, index) => (
          <div
            key={index}
            className="side-item"
            style={{ marginBottom: "15px" }}
          >
            {/* Topic Header */}
            <h4
              className={`sidebar-topic ${
                activeSection === index ? "active" : ""
              }`}
              onClick={() => onSidebarClick(index)} // Click to scroll to the corresponding section
            >
              {index + 1}. {topic.topic}
            </h4>

            {/* Questions under each topic */}
            {/* <ul className="sidebar-questions-list">
              {topic.qa.map((qaItem, qaIndex) => (
                <li key={qaIndex} className="sidebar-question-item">
                  {`${index + 1}${String.fromCharCode(97 + qaIndex)}. ${
                    qaItem.question
                  }`}
                </li>
              ))}
            </ul> */}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
