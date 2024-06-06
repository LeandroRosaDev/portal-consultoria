"use server";
import { redirect } from "next/navigation";
import { url } from "@/functions/url";
import { cookies } from "next/headers";

type UserData = {
  [key: string]: string;
};

export async function editUserInfo(formData: FormData): Promise<void> {
  try {
    const token = cookies().get("token")?.value;

    // Convert FormData to JSON
    const data: UserData = {};
    formData.forEach((value: FormDataEntryValue, key: string) => {
      if (typeof value === "string") {
        data[key] = value;
      }
    });

    const response = await fetch(`${url}/wp-json/api/usuario`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    console.log(data);
    console.log(response);
  } catch (error) {
    console.error("Erro durante o login:", error);
    throw error;
  }
  redirect("/");
}
