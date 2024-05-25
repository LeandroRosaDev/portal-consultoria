"use client";
import { documentGetAction } from "@/actions/processData/document-get-action";
import { InfoProcess } from "@/interfaces/process-data-types";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function GetDocumentos() {
  const [documents, setDocuments] = useState<InfoProcess[]>([]);

  useEffect(() => {
    async function loadDocuments() {
      const { data } = await documentGetAction();
      console.log(data);

      setDocuments(data);
    }
    loadDocuments();
  }, []);

  return (
    <main>
      <div className="m-10">
        {documents.map((document) => (
          <div key={document.id}>
            <h1>Nome do documento: {document.nome}</h1>
            <h1>Tipo do documento: {document.tipo_documento}</h1>
            {/* {document.fotos && document.fotos.length > 0 && (
              <Image
                src={document.fotos[1].src}
                alt={`Imagem de ${document.nome}`}
                width={100}
                height={100}
              />
            )} */}
          </div>
        ))}
      </div>
    </main>
  );
}
