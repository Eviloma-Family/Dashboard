import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OtherWidget({ title, value, icon, color, symbol, red }) {
  return (
    <div className="bg-primary rounded-2xl p-6 flex flex-row items-center justify-between">
      <div>
        <div className="text-secondaryWhite">{title}</div>
        <div className={`text-2xl ${red && value > 0 ? "text-red" : ""}`}>
          {value}
          {symbol}
        </div>
      </div>
      <div className={`text-4xl ${color}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
}

export default OtherWidget;
