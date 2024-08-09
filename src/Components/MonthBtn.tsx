import React from "react";
import { useDataContext } from "../Context/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap-m) var(--gap-s)",
  backgroundColor: "var(--color-tertiary)",
  border: "none",
  borderRadius: "var(--gap-m)",
  color: "var(--color-secondary)",
  fontWeight: "600",
  textTransform: "capitalize",
};
function nameMonth(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}
function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}
const MonthBtn = ({ n }: { n: number }) => {
  const { setStartDate, setEndDate } = useDataContext();
  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStartDate(formatDate(firstDay));
    setEndDate(formatDate(lastDay));
  }
  return (
    <button style={style} onClick={() => setMonth(n)}>
      {" "}
      {nameMonth(n)}
    </button>
  );
};

export default MonthBtn;
