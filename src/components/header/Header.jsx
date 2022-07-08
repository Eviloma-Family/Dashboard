import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { logOut } from "../../supabaseClient";

function Header() {
  return (
    <div className="w-full h-16 flex items-center justify-end gap-12">
      <div
        onClick={logOut}
        className="hover:text-secondary duration-150 cursor-pointer "
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span className="ml-2">Вийти</span>
      </div>
    </div>
  );
}

export default Header;
