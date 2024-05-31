"use server";
import { redirect } from "next/navigation";
import { url } from "@/functions/url";
import { cookies } from "next/headers";

export async function editUserInfo(formData: FormData) {
  try {
    const token = cookies().get("token");
    const response = await fetch(url + "/wp-json/api/usuario", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    console.log(formData);
    console.log(response);
  } catch (error) {
    console.error("Erro durante o login:", error);
    throw error;
  }
  redirect("/");
}
