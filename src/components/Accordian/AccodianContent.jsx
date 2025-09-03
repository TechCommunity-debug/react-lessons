import { useAccordianContext } from "./Accordian";

export default function AccordianContent({ id, className, children }) {
  const { openItemId } = useAccordianContext();
  const isOpen = openItemId === id;
  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
