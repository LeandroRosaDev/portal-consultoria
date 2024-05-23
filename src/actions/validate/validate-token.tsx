"use server";

import { cookies } from "next/headers";
import { url } from "@/functions/url";

export default async function validateToken() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Acesso negado.");
    const response = await fetch(url + "/jwt-auth/v1/token/validate", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) throw new Error("Erro ao validar token.");
    const data = await response.json();
    return { data, ok: true, error: "" };
  } catch (error) {
    return { data: null, ok: false, error: "Erro ao validar token." };
  }
}
