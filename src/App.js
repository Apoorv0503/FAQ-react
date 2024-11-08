import React, { useEffect, useState, useRef } from "react";
import Accordions from "./components/Accordion/Accordions";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { data } from "./utils/data";
import Header from "./components/Header/Header";

function App() {
  const [activeSection, setActiveSection] = useState(null); // To track which sidebar item is active
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null); // To track which accordion is open
  const sectionRefs = useRef([]); // Array of refs for each accordion section

  // Intersection observer to track active section based on scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveSection(index); // Update active section when it comes into view
          }
        });
      },
      {
        root: null, // accordion section
        threshold: 1, // Section must be 100%, (if 0.6 then 60%) visible to be considered active
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref); // Observe each section
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref); // Clean up the observer
      });
    };
  }, []);

  // Handle sidebar item click to scroll to the correct section
  const handleSidebarClick = (index) => {
    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the section
    }
  };

  // Handle accordion item click to highlight the corresponding sidebar item
  const handleAccordionToggle = (index) => {
    setActiveAccordionIndex(index); // Set active accordion index when a section is clicked
    setActiveSection(index); // Highlight the corresponding sidebar item
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="section-a">
          <Sidebar
            className="sidebar"
            data={data}
            activeSection={activeSection}
            onSidebarClick={handleSidebarClick}
          />
        </div>
        <div className="section-b">
          <h1 className="heading">Frequently Asked Questions</h1>
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)} // Assign each section to a ref
            >
              <Accordions
                topic={item.topic}
                faqs={item.qa}
                isActive={index === activeAccordionIndex}
                onAccordionToggle={() => handleAccordionToggle(index)} // Handle accordion click
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
