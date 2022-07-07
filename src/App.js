import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Link from "./pages/Link";
import Main from "./pages/Main";
import { supabase } from "./supabaseClient.js";
import GoogleButton from "./ui/google_button/GoogleButton";

function App() {
  useEffect(() => {
    supabase.auth.onAuthStateChange(() => {
      const sessionUser = supabase.auth.user();
      setAuth(sessionUser);
    });
  }, []);

  const [auth, setAuth] = useState(supabase.auth.currentUser); //supabase.auth.currentUser

  return (
    <div className={auth ? "min-h-screen" : "h-screen overflow-hidden"}>
      <div className={`flex flex-col`}>
        <div className={auth ? "" : "blur"}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/link" element={<Link />} />
          </Routes>
        </div>
      </div>
      {!auth ? (
        <div className="flex h-screen w-full bg-[#000000]/70 absolute top-0 left-0 items-center justify-center">
          <div className="bg-primary px-10 py-6 flex flex-col rounded-2xl mx-5">
            <div className="text-3xl place-self-center">Авторизація</div>
            <div className="text-secondaryWhite mt-2 mb-8">
              Для доступу до панелі потрібно авторизуватись
            </div>
            <GoogleButton />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
