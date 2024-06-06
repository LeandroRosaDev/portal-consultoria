"use client";
import { profilePictureGetAction } from "@/actions/user/user-profile-picture-get-action";
import { foto } from "@/interfaces/foto-types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useUser } from "@/context/user-context";
import masculino from "../../../public/assets/masculino.jpg";
import feminino from "../../../public/assets/feminino.jpg";
import outro from "../../../public/assets/outro.jpeg";

export default function GetProfilePicture({
  className,
  width,
  height,
  ...props
}: any) {
  const [profilePictures, setProfilePictures] = useState<foto[]>([]);

  useEffect(() => {
    async function loadDocuments() {
      const { foto }: any = await profilePictureGetAction(); // Quando o usuário não possuir foto esse valor será igual []
      setProfilePictures(foto);
    }
    loadDocuments();
  }, []);

  const { user } = useUser();
  const genero = user?.genero;

  const getDefaultImage = (genero: string) => {
    switch (genero) {
      case "Feminino":
        return feminino.src;
      case "Masculino":
        return masculino.src;
      case "Outro":
      default:
        return outro.src;
    }
  };

  return (
    <main>
      {profilePictures.length > 0 ? (
        profilePictures.map((picture) => (
          <div key={picture.id}>
            {picture.fotos && picture.fotos.length > 0 ? (
              picture.fotos.map((foto) => (
                <Image
                  key={foto.titulo}
                  {...props}
                  width={width}
                  height={height}
                  className={`rounded-full mb-3 object-cover object-center ${className}`}
                  src={foto.src}
                  alt={foto.titulo}
                />
              ))
            ) : (
              <Image
                {...props}
                width={width}
                height={height}
                className={`rounded-full mb-3 object-cover object-center ${className}`}
                src={getDefaultImage(genero)}
                alt="Default Profile"
              />
            )}
          </div>
        ))
      ) : (
        <Image
          {...props}
          width={width}
          height={height}
          className={`rounded-full mb-3 object-cover object-center ${className}`}
          src={getDefaultImage(genero)}
          alt="Default Profile"
        />
      )}
    </main>
  );
}
