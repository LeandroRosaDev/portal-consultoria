"use server";

import { url } from "@/functions/url";
import { cookies } from "next/headers";

export async function profilePictureGetAction() {
  const token = cookies().get("token")?.value;
  const response = await fetch(url + "/wp-json/api/foto", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const foto = await response.json();
  // console.log(foto);

  return { foto };
}
