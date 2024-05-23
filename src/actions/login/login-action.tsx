"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const credentials = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  try {
    const response = await fetch(
      "https://apiconsultoria.altuori.com/wp-json/jwt-auth/v1/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao fazer login. Verifique suas credenciais.");
    }

    const data = await response.json();
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 60);

    cookies().set("token", data.token, {
      secure: true,
      httpOnly: true,
      expires: expirationTime,
    });
  } catch (error) {
    console.error("Erro durante o login:", error);
    throw error;
  }

  redirect("/");
  revalidatePath("/");
}
