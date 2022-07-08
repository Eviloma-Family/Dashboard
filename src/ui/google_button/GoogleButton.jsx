import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logIn } from "../../supabaseClient";

function GoogleButton() {
  return (
    <div
      onClick={logIn}
      className="flex flex-row gap-4 text-center justify-center bg-[#4285f4] px-4 py-2 rounded-lg hover:bg-[#307fff] cursor-pointer duration-150"
    >
      <div>
        <FontAwesomeIcon icon={faGoogle} />
      </div>
      <div>Ввійти</div>
    </div>
  );
}

export default GoogleButton;
