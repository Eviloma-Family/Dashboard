import { useEffect, useState } from "react";
import { useAuth } from "../../../supabaseClient.js";
import TelegramBadge from "../../telegram_badge/TelegramBadge.jsx";

function ProfileWidget() {
  const auth = useAuth();

  function onError(e) {
    e.target.onError = null;
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/638px-Missing_avatar.svg.png?20170526124048";
  }

  return (
    <div className="bg-primary rounded-2xl col-span-1 tablet:col-span-2 row-span-1 laptop:row-span-2 p-6">
      <div className="flex flex-col gap-y-8 items-center justify-center">
        <img
          src={auth?.user_metadata.avatar_url.slice(0, -6) ?? ""}
          className="rounded-full w-1/2 tablet:w-1/4"
          onError={onError}
          alt=""
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-1 text-2xl">
            <div></div>
            Привіт,
            <div className="font-bold mr-2">
              {auth?.user_metadata.name ?? "Username"}
            </div>
          </div>
          <TelegramBadge active />
        </div>
      </div>
    </div>
  );
}

export default ProfileWidget;
