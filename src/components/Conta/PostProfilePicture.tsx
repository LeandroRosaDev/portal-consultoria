"use client";

import React, { useState } from "react";
import Input from "../FormComponentes/Input";
import { Button } from "../FormComponentes/Button";
import InputFile from "../FormComponentes/InputFile";
import { profilePicturePostAction } from "@/actions/user/user-profile-picture-post-action";
import Image from "next/image";
import { useUser } from "@/context/user-context";

export default function PostProfilePicture() {
  function handleLoad() {
    window.location.reload();
  }
  const { user } = useUser();
  return (
    <form
      action={profilePicturePostAction}
      className="flex flex-row flex-wrap gap-7 mt-10 justify-start items-start "
    >
      <Input
        name="nome"
        type="hidden"
        value={`Foto de ${user?.nome} ${user?.sobrenome}`}
      />
      <InputFile type="file" name="foto" className="input-file" />

      <button type="submit" onClick={handleLoad}>
        <Image
          src="/assets/icon/upload.svg"
          width={30}
          height={30}
          alt="Logout"
        />
      </button>
    </form>
  );
}
