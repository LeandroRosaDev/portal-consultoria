"use client";
import { documentGetAction } from "@/actions/processData/document-get-action";
import { InfoProcess } from "@/interfaces/process-data-types";
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
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

  const handleDownload = (url: string, title: string) => {
    saveAs(url, title);
  };

  return (
    <main>
      <div className="m-10">
        {documents.length > 0 ? (
          documents.map((document) => (
            <div key={document.id} className="mb-4">
              <h1>Nome do documento: {document.nome}</h1>
              <h2>Tipo do documento: {document.tipo_documento}</h2>
              {document.fotos && document.fotos.length > 0 ? (
                document.fotos.map((foto, index) => (
                  <div key={index}>
                    <Image
                      src={foto.src}
                      alt={foto.titulo}
                      height={100}
                      width={100}
                    />
                    <h3>Título: {foto.titulo}</h3>
                    <button
                      onClick={() => handleDownload(foto.src, foto.titulo)}
                      className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Baixe o documento
                    </button>
                  </div>
                ))
              ) : (
                <p>Este documento não contém fotos.</p>
              )}
            </div>
          ))
        ) : (
          <p>Nenhum documento disponível.</p>
        )}
      </div>
    </main>
  );
}
