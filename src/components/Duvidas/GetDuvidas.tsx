"use client";
import React, { useState, useEffect } from "react";
import { duvidasGetAction } from "@/actions/duvidas/duvidas-get-action";
import { Duvidas } from "@/interfaces/duvidas-types";

export default function GetDuvidas() {
  const [documents, setDocuments] = useState<Duvidas[]>([]);

  useEffect(() => {
    async function loadDocuments() {
      const { data } = await duvidasGetAction();
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
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Pergunta</h1>
              <h2>{document.duvida}</h2>
              <h1 className="text-xl">Resposta</h1>
              <h2>{document.resposta}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
