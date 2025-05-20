import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const MyAccordion = ({ openDefault = false, name = "No name", children }) => {
  return (
    <Accordion defaultExpanded={openDefault} disableGutters>
      <AccordionSummary
        sx={[
          {
            "& span": { margin: "0 !important ", p: 0 },
            "min-height": "auto !important",
            py: 1,
          },
        ]}
        expandIcon={<KeyboardArrowDown color="success" />}
      >
        {name}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
