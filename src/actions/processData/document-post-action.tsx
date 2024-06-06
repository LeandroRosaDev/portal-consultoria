"use server";
import { url } from "@/functions/url";
import { cookies } from "next/headers";

export async function documentPostAction(formData: FormData) {
  try {
    const token = cookies().get("token")?.value;
    const response = await fetch(url + "/wp-json/api/servico", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    console.log(formData);
  } catch (error) {
    console.error("Erro durante o login:", error);
    throw error;
  }
  //   redirect("/");
}
