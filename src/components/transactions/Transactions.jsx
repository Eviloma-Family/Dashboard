import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import Transaction from "../../ui/transaction/Transaction";

function Transactions() {
  return (
    <div>
      <div className="flex flex-row items-center gap-4 my-8">
        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faMoneyBill1} className="h-6" />
        </div>
        <h1 className="text-3xl">Транзакції</h1>
      </div>
      <div className="grid grid-col tablet:grid-cols-2 laptop:grid-cols-3 gap-y-5 gap-x-3">
        <Transaction
          type="deposit"
          amount="25.00"
          date="09.06.2022"
          desc="Депозит"
        />
        <Transaction
          type="payment"
          amount="-45.00"
          date="09.06.2022"
          desc="Spotify"
        />
        <Transaction
          type="payment"
          amount="-30.00"
          date="09.06.2022"
          desc="Youtube"
        />
        <Transaction amount="30.00" date="09.06.2022" desc="Бонус" />
      </div>
    </div>
  );
}

export default Transactions;
