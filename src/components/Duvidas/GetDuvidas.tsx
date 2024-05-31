'use client';
import React, { useState, useEffect } from 'react';
import { duvidasGetAction } from '@/actions/duvidas/duvidas-get-action';
import { Duvidas } from '@/interfaces/duvidas-types';
import Image from 'next/image';

export default function GetDuvidas() {
  const [documents, setDocuments] = useState<Duvidas[]>([]);
  const [rotatedIds, setRotatedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    async function loadDocuments() {
      const { data } = await duvidasGetAction();
      setDocuments(data);
    }
    loadDocuments();
  }, []);

  const toggleRotation = (id: number) => {
    setRotatedIds((prevIds) => {
      const newIds = new Set(prevIds);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        newIds.add(id);
      }
      return newIds;
    });
  };

  return (
    <main>
      <div>
        {documents.map((document) => (
          <div key={document.id}>
            <div className="flex flex-col gap-2 px-4 pb-4 bg-blue-50 rounded-2xl w-2/3 my-9">
              <div
                className="flex justify-between cursor-pointer items-center"
                onClick={() => toggleRotation(document.id)}
              >
                <h1 className="min-title font-extrabold">{document.duvida}</h1>
                <Image
                  src="/assets/icon/seta-abrir.svg"
                  width={12}
                  height={12}
                  alt="seta-abrir"
                  quality={100}
                  className={`w-4 h-3 mt-2 transition-transform duration-300 ${
                    rotatedIds.has(document.id) ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <hr />
              <h2 className="text-xl">{document.resposta}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
