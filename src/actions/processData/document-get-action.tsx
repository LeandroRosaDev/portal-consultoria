"use server";

import { url } from "@/functions/url";
import { cookies } from "next/headers";

export async function documentGetAction() {
  const token = cookies().get("token")?.value;
  const response = await fetch(url + "/wp-json/api/servico", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  console.log(data);

  return { data };
}
