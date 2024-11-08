import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./Accordion.css";
import { Backdrop } from "@mui/material";

const Accordions = ({ topic, faqs }) => {
  // <Accordion defaultExpanded>

  return (
    <div className="accordion-single">
      <Accordion
        sx={
          {
            // border: "1px solid rgba(118, 113, 180, 255)"
          }
        }
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={
            {
              // backgroundColor: "#d9d8eb",
              // backgroundColor: "#afacd4",
              //  color: "white"
            }
          }
        >
          <p className="topic">{topic}</p>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {faqs.map((faq, idx) => {
              const open = idx == 0 ? "defaultExpanded" : "";

              return (
                <div className="acc-box">
                  <Accordion
                    defaultExpanded
                    sx={
                      {
                        // backgroundColor: "#d9d8eb",
                        // backgroundColor: "rgba(118, 113, 180, 255)",
                        // color: "white",
                      }
                    }
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <p className="question">{faq.question}</p>
                    </AccordionSummary>
                    {/* <hr className="separator" /> */}
                    <AccordionDetails>
                      <p className="answer">{faq.answer}</p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;
