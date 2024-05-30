"use server";
import apiError from "@/functions/api-error";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { url } from "@/functions/url";
import { redirect } from "next/navigation";

export async function loginAction(state: {}, formData: FormData) {
  const username = (formData.get("username") as string) || null;
  const password = (formData.get("password") as string) || null;

  try {
    if (!username || !password) throw new Error("Preencha os dados.");
    const response = await fetch(url + "/wp-json/jwt-auth/v1/token/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Senha ou usuário inválidos.");

    const data = await response.json();
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 60);

    cookies().set("token", data.token, {
      secure: true,
      httpOnly: true,
      expires: expirationTime,
    });

    revalidatePath("/");

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
