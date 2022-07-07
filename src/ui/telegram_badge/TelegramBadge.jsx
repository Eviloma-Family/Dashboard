import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function TelegramBadge({ active }) {
  const navigate = useNavigate();
  function Link() {
    navigate("/link");
  }
  function UnLink() {
    navigate("/unlink");
  }
  return (
    <div
      onClick={active ? UnLink : Link}
      className={`flex flex-row px-4 py-2 items-center justify-center rounded-full mt-2 w-36 hover:bg-secondary ${
        active ? "bg-green" : "bg-red"
      }`}
    >
      <FontAwesomeIcon
        className={active ? "text-black" : "text-white"}
        icon={active ? faCircleCheck : faCircleXmark}
      />
      <div className={`ml-4 ${active ? "text-black" : "text-white"}`}>
        Телеграм
      </div>
    </div>
  );
}

export default TelegramBadge;
