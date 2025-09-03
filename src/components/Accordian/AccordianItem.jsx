import { createContext, useContext } from "react";

const AccordianItemContext = createContext();

export function useAccordianItemContext() {
  const ctx = useContext(AccordianItemContext);
  if (!ctx) {
    throw new Error(
      "useAccordianItemContext must be used within an AccordianItemProvider"
    );
  }
  return ctx;
}

export default function AccordianItem({id, className, children }) {
  return (
    <AccordianItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordianItemContext.Provider>
  );
}
