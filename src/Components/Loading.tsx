import React from "react";

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-secondary)",
  borderRightColor: "var(--color-quaternary)",
  width: "var(--gap-m)",
  height: "var(--gap-m)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};
const Loading = () => {
  return (
    <div style={style}>
      <style>
        {`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
      </style>
    </div>
  );
};

export default Loading;
