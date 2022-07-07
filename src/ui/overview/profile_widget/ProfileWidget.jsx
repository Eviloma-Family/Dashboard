import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient.js";
import TelegramBadge from "../../telegram_badge/TelegramBadge.jsx";

function ProfileWidget() {
  const [username, setUsername] = useState(
    supabase.auth.user()?.user_metadata.name ?? ""
  );
  const [avatar, setAvatar] = useState(
    supabase.auth.user()?.user_metadata.avatar_url.slice(0, -6) ?? ""
  );
  useEffect(() => {
    supabase.auth.onAuthStateChange(() => {
      const sessionUser = supabase.auth.user();
      if (sessionUser) {
        setUsername(sessionUser.user_metadata.name);
        setAvatar(supabase.auth.user().user_metadata.avatar_url.slice(0, -6));
      }
    });
  }, []);

  function onError(e) {
    e.target.onError = null;
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/638px-Missing_avatar.svg.png?20170526124048";
  }

  return (
    <div className="bg-primary rounded-2xl col-span-1 tablet:col-span-2 row-span-1 laptop:row-span-2 p-6">
      <div className="flex flex-col gap-y-8 items-center justify-center">
        <img
          src={avatar}
          className="rounded-full w-1/2 tablet:w-1/4"
          onError={onError}
          alt=""
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-1 text-2xl">
            <div></div>
            Привіт,
            <div className="font-bold mr-2">{username || "Username"}</div>
          </div>
          <TelegramBadge active />
        </div>
      </div>
    </div>
  );
}

export default ProfileWidget;
