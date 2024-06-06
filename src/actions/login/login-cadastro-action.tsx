"use server";
import { redirect } from "next/navigation";
import { url } from "@/functions/url";

export async function loginCadastroAction(formData: FormData) {
  try {
    const response = await fetch(url + "/wp-json/api/usuario", {
      method: "POST",
      body: formData,
    });
    // console.log(formData);
  } catch (error) {
    console.error("Erro durante o login:", error);
    throw error;
  }
  redirect("/");
}
