"use server";
import { url } from "@/functions/url";
import { cookies } from "next/headers";

export async function profilePicturePostAction(formData: FormData) {
  try {
    const token = cookies().get("token")?.value;
    const response = await fetch(url + "/wp-json/api/foto", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
  } catch (error) {
    console.error("Erro durante envio da Foto:", error);
    throw error;
  }
}
