"use client";
import { profilePictureGetAction } from "@/actions/user/user-profile-picture-get-action";
import { foto } from "@/interfaces/foto-types";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function GetProfilePicture({
  className,
  width,
  height,
  ...props
}: any) {
  const [profilePicture, setProfilePicture] = useState<foto[]>([]);

  useEffect(() => {
    async function loadDocuments() {
      const { foto }: any = await profilePictureGetAction();
      setProfilePicture(foto);
    }
    loadDocuments();
  }, []);

  return (
    <main>
      {profilePicture.map((picture) => (
        <div key={picture.id}>
          {picture.fotos.map((foto) => (
            <Image
              key={foto.titulo}
              {...props}
              width={width}
              height={height}
              className={`rounded-full mb-3 object-cover object-center ${className}`}
              src={foto.src}
              alt={foto.titulo}
            />
          ))}
        </div>
      ))}
    </main>
    // <>
    //   {profilePicture[0].fotos ? (
    //     <main>
    //       {profilePicture.map((picture) => (
    //         <div key={picture.titulo}>
    //           {picture.fotos.map((foto) => (
    //             <Image
    //               key={foto.titulo}
    //               {...props}
    //               width={width}
    //               height={height}
    //               className={`rounded-full mb-3 object-cover object-center ${className}`}
    //               src={foto.src}
    //               alt={foto.titulo}
    //             />
    //           ))}
    //         </div>
    //       ))}
    //     </main>
    //   ) : (
    //     <h1> Não existe foto de perfil</h1>
    //   )}
    // </>
  );
}
