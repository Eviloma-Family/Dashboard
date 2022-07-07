import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { supabase } from "../../supabaseClient";

function Header() {
  async function LogOut() {
    await supabase.auth.signOut();
    window.location.reload(false);
  }
  return (
    <div className="w-full h-16 flex items-center justify-end gap-12">
      <div
        onClick={LogOut}
        className="hover:text-secondary duration-150 cursor-pointer "
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span className="ml-2">Вийти</span>
      </div>
    </div>
  );
}

export default Header;
