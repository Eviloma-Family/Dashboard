import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, supabase } from "../supabaseClient";
import Main from "./Main";
import { motion } from "framer-motion";

function Link() {
  const [code, setCode] = useState(
    new URLSearchParams(window.location.search).get("code") ?? ""
  );
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function Checker() {
      if (!getAuth()) {
        return Redirect();
      }

      let { data, error } = await supabase
        .from("telegram")
        .select("*")
        .eq("user_id", supabase.auth?.user().id);

      if (error || data.length !== 0) {
        setError(
          "Ваш аккаунт уже прив'язаний до телеграму. Перехід на головну сторінку."
        );
        return Redirect(3000);
      }

      return setActiveButton(true);
    }

    Checker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function LinkRequest(event) {
    setError("");
    setActiveButton(false);
    event.preventDefault();
    if (code.length !== 6 || isNaN(code)) {
      setActiveButton(true);
      return setError("Невірно вказаний код!");
    }
    let codes = await GetCodeFromDataBase();

    if (codes === null) {
      setActiveButton(true);
      return setError("Помилка з'єднання з базою данних. Спробуйте пізніше!");
    }

    if (codes.length === 0) {
      setActiveButton(true);
      return setError("Такого коду не існує!");
    }

    const current = new Date();

    for (let e of codes) {
      const valid = new Date(e.valid_until);
      if (valid > current) {
        const link = await supabase
          .from("telegram")
          .insert([{ id: e.telegram, user_id: supabase.auth.user().id }]);
        if (link.error) {
          setActiveButton(true);
          return setError(
            "Помилка з'єднання з базою данних. Спробуйте пізніше!"
          );
        }
        await supabase.from("temp_codes").delete().eq("telegram", e.telegram);
        setSuccessful(true);
        return Redirect(3000);
      }
    }
  }

  async function GetCodeFromDataBase() {
    let { data, error } = await supabase
      .from("temp_codes")
      .select("*")
      .eq("code", code);

    if (error) {
      return null;
    }
    return data;
  }

  function Redirect(timeout) {
    const path = "/";
    setTimeout(() => {
      navigate(path);
    }, timeout | 0);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-screen overflow-hidden">
        <div className={`flex flex-col blur`}>
          <Main />
        </div>
        <div className="flex h-screen w-full bg-[#000000]/70 absolute top-0 left-0 items-center justify-center">
          <div className="bg-primary px-10 py-6 flex flex-col rounded-2xl mx-5 tablet:w-1/2 desktop:w-1/4">
            <div
              onClick={Redirect}
              className="text-secondaryWhite mb-3 hover:text-thirdary duration-150 cursor-pointer"
            >
              Назад
            </div>
            <div className="text-3xl place-self-center">Телеграм</div>
            <div className="text-secondaryWhite mt-2 mb-1">
              Для з'єднання вашого телеграм аккаунту з сайтом введіть код нижче
              та натисніть кнопку "<span className="font-bold">з'єднати</span>"
            </div>
            <div className="text-secondaryWhite mt-2 mb-8">
              Код можна отримати за допомогою телеграм бота.
            </div>
            <form>
              <input
                className="bg-[#eee] text-[#000] placeholder:text-[#444] focus:outline-0 px-4 py-2 mb-4 rounded-full w-full"
                placeholder="Введіть код сюди..."
                maxLength="6"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
              <button
                type="submit"
                disabled={!activeButton}
                onClick={LinkRequest}
                className="flex flex-row gap-4 text-center justify-center bg-secondary hover:bg-thirdary disabled:bg-[#777] px-4 py-2 rounded-lg cursor-pointer duration-150 w-full"
              >
                З'єднати
              </button>
            </form>
            <div>
              {error !== "" ? <div className="mt-4 text-red">{error}</div> : ""}
              {successful ? (
                <div className="mt-4 text-green">
                  Ваш аккаунт успішно прив'язаний. Перехід на головну сторінку.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Link;
