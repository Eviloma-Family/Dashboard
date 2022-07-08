import { Route, Routes, useLocation } from "react-router-dom";
import { getUserData, useAuth } from "./supabaseClient";
import Link from "./pages/Link";
import Main from "./pages/Main";
import GoogleButton from "./ui/google_button/GoogleButton";
import { useEffect, useState } from "react";
import { PageContext } from "./page-context";
import { AnimatePresence } from "framer-motion";

function App() {
  const isAuth = useAuth();
  const [data, setData] = useState();
  const location = useLocation();
  useEffect(() => {
    async function getData() {
      const loadData = await getUserData();
      setData(loadData);
    }

    getData();
  }, [isAuth]);

  return (
    <PageContext.Provider value={[data, setData]}>
      <div className={isAuth ? "min-h-screen" : "h-screen overflow-hidden"}>
        <div className={`flex flex-col`}>
          <div className={isAuth ? "" : "blur"}>
            <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Main />} />
                <Route path="/link" element={<Link />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
        {!isAuth ? (
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
    </PageContext.Provider>
  );
}

export default App;
