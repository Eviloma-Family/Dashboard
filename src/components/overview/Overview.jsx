import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faMoneyBill,
  faTicket,
  faCashRegister,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import ProfileWidget from "../../ui/overview/profile_widget/ProfileWidget";
import OtherWidget from "../../ui/overview/other_widget/OtherWidget";
import { PageContext } from "../../page-context";

function Overview() {
  const [data] = useContext(PageContext);
  return (
    <div className="w-full">
      <div className="flex flex-row items-center gap-4 my-8">
        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faChartLine} className="h-6" />
        </div>
        <h1 className="text-3xl">Огляд</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2 laptop:grid-cols-4">
        <ProfileWidget />
        <OtherWidget
          title="Баланс"
          value={data?.balance ?? 0.0}
          symbol="₴"
          icon={faMoneyBill}
          color="text-green"
        />
        <OtherWidget
          title="Підписки"
          value="0"
          icon={faTicket}
          color="text-blue"
        />
        <OtherWidget
          title="Ціна підписок"
          value="0"
          symbol="₴/міс"
          icon={faCashRegister}
          color="text-yellow"
        />
        <OtherWidget
          title="Кі-сть транзакцій"
          value="0"
          icon={faCreditCard}
          color="text-orange"
        />
      </div>
    </div>
  );
}

export default Overview;
