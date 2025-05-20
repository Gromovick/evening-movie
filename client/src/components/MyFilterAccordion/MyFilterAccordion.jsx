import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import s from "./MyFilterAccordion.module.scss";

const MyFilterAccordion = ({
  checkboxes,
  activeCheckboxes,
  setActiveCheckboxes,
  name,
  withType = null,
}) => {
  const handleToggle = (id) => {
    setActiveCheckboxes((prev) => {
      if (withType) {
        return {
          ...prev,
          [withType]: {
            ...(prev[withType] || {}),
            [id]: !prev?.[withType]?.[id],
          },
        };
      } else {
        return {
          ...prev,
          [id]: !prev?.[id],
        };
      }
    });
  };

  const isChecked = (id) => {
    return withType
      ? !!activeCheckboxes?.[withType]?.[id]
      : !!activeCheckboxes?.[id];
  };

  return (
    <Accordion disableGutters sx={{ background: "var(--grey-60)", p: 0 }}>
      <AccordionSummary
        expandIcon={<KeyboardArrowDown />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          "& span": { margin: "0 !important", p: 0 },
          minHeight: "auto !important",
          py: 1,
        }}
      >
        <Typography sx={{ fontSize: 16, p: 0 }} component="span">
          {name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List sx={{ p: 0 }}>
          {checkboxes.map((item) => (
            <ListItem sx={{ p: 0 }} key={item.id} disablePadding>
              <ListItemButton
                sx={{ py: 0 }}
                onClick={() => handleToggle(item.id)}
              >
                <Checkbox
                  sx={{ "& svg": { width: "1rem", aspectRatio: "1/1" } }}
                  edge="start"
                  checked={isChecked(item.id)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": `build-${item.id}` }}
                />
                <ListItemText
                  id={`build-${item.id}`}
                  sx={{ p: 0, "& span": { fontSize: "14px" } }}
                  primary={item.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyFilterAccordion;
