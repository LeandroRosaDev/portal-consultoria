"use server";

import { cookies } from "next/headers";
import { url } from "@/functions/url";

export async function userGetAction() {
  const token = cookies().get("token")?.value;

  try {
    const response = await fetch(url + "/wp-json/api/usuario", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();

    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    throw error;
  }
}
