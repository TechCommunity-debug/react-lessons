import { createContext, useContext, useState } from "react";

import AccordianItem from "./AccordianItem";
import AccordianTitle from "./AccodianTittle";
import AccordianContent from "./AccodianContent";

const AccordianContext = createContext();

export function useAccordianContext() {
  const ctx = useContext(AccordianContext);

  if (!ctx) {
    throw new Error(
      "useAccordianContext must be used within components wrapped by Accordian"
    );
  }

  return ctx;
}

export default function Accordian({ children, className }) {
  const [openItemId, setOpenItemId] = useState();
  const contextValue = {
    openItemId: openItemId,
    toggleItem,
  };

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  return (
    <AccordianContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordianContext.Provider>
  );
}

Accordian.Item = AccordianItem;
Accordian.Title = AccordianTitle;
Accordian.Content = AccordianContent;
