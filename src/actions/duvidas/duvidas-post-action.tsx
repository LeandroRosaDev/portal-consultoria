"use server";
import { redirect } from "next/navigation";
import { url } from "@/functions/url";
import { cookies } from "next/headers";

export async function duvidasPostAction(formData: FormData) {
  try {
    const token = cookies().get("token")?.value;
    const response = await fetch(url + "/wp-json/api/duvida", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    // console.log(formData);
  } catch (error) {
    console.error("Erro durante ao enviar a dúvida:", error);
    throw error;
  }
  //   redirect("/");
}
