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
            <div className="flex flex-col gap-2 px-4 bg-blue-50 w-2/3 my-6 shadow rounded-3xl">
              <div>
                <div
                  className="flex justify-between cursor-pointer items-center"
                  onClick={() => toggleRotation(document.id as number)}
                >
                  <h1 className="min-title font-extrabold">
                    {document.duvida}
                  </h1>
                  <Image
                    src="/assets/icon/seta-abrir.svg"
                    width={12}
                    height={12}
                    alt="seta-abrir"
                    quality={100}
                    className={`w-4 h-3 mt-2 transition-transform duration-300 ${
                      rotatedIds.has(document.id as number) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out pb-4 ${
                    rotatedIds.has(document.id as number)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <hr className="transition-opacity duration-500 ease-in-out" />
                  <h2 className="text-xl transition-opacity duration-500 ease-in-out mt-2">
                    {document.resposta}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
