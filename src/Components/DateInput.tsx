import React from "react";

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-secondary)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-quaternary)",
  borderRadius: "var(--gap)",
};
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  fontSize: "1rem",
  ...generalStyle,
};
type IDateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInputProps) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        type="date"
        id={label}
        name={label}
        {...props}
      />
    </div>
  );
};

export default DateInput;
