import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";

//* Type *//
//* payment (red) *//
//* deposit (green) *//
//* other (blue) *//

function Transaction({ type, amount, date, desc }) {
  function getColor() {
    if (type === "payment") {
      return "text-red";
    }
    if (type === "deposit") {
      return "text-green";
    }
    return "text-blue";
  }
  return (
    <div className="bg-primary h-24 rounded-2xl flex flex-row items-center px-3 py-1 justify-between">
      <div className="bg-primary h-24 rounded-2xl flex flex-row items-center ">
        <div className="h-16 w-16 flex items-center justify-center bg-secondary rounded-full">
          <FontAwesomeIcon
            icon={faMoneyBillTransfer}
            className={`h-6 ${getColor("text")}`}
          />
        </div>
        <div className="flex flex-col ml-4">
          <div className="text-white text-2xl">{amount}₴</div>
          <div className="text-secondaryWhite">{date}</div>
        </div>
      </div>
      <div className="text-white mr-2">{desc}</div>
    </div>
  );
}

export default Transaction;
