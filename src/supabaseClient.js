import { createClient } from "@supabase/supabase-js";
import { useState, useEffect, useCallback } from "react";

export let supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export function getAuth() {
  return supabase.auth.currentUser;
}

export function useAuth() {
  const [auth, setAuth] = useState(supabase.auth.currentUser);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async () => {
      const sessionUser = supabase.auth.user();
      setAuth(sessionUser);
    });
  }, []);

  return auth;
}

export async function logIn() {
  await supabase.auth.signIn({
    provider: "google",
  });
}

export async function logOut() {
  await supabase.auth.signOut();
  window.location.reload(false);
}

export async function getUserData() {
  if (getAuth() === null) {
    return null;
  }

  let { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", supabase.auth.user().id);

  if (error) {
    return null;
  }

  return data[0] ?? null;
}
