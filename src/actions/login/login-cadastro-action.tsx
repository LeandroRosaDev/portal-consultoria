"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginCadastroAction(formData: FormData) {
  try {
    const credencials = {
      email: formData.get("email") as string,
      nome: formData.get("nome") as string,
      senha: formData.get("senha") as string,
      rua: formData.get("rua") as string,
      numero: formData.get("numero") as string,
      complemento: formData.get("complemento") as string,
      cep: formData.get("cep") as string,
      bairro: formData.get("bairro") as string,
      cidade: formData.get("cidade") as string,
      estado: formData.get("estado") as string,
      telefone: formData.get("telefone") as string,
      genero: formData.get("genero") as string,
      origem: formData.get("origem") as string,
      tipo_acesso: formData.get("tipo_acesso") as string,
      servico: formData.get("servico") as string,
    };
    const response = await fetch(
      "https://apiconsultoria.altuori.com/wp-json/api/usuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credencials),
      }
    );

    console.log(credencials);

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
  //   redirect("/");
}
