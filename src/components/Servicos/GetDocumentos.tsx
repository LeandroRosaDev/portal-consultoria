// "use client";
// import { documentGetAction } from "@/actions/processData/document-get-action";
// import { InfoProcess } from "@/interfaces/process-data-types";
// import React, { useState, useEffect } from "react";

// export default function GetDocumentos() {
//   const [documents, setDocuments] = useState<InfoProcess[]>([]);

//   useEffect(() => {
//     async function loadDocuments() {
//       const { data } = await documentGetAction();
//       console.log(data);
//       setDocuments(data);
//     }
//     loadDocuments();
//   }, []);

//   return (
//     <main>
//       <div className="m-10">
//         {documents.map((document) => (
//           <div key={document.id} className="mb-4">
//             <h1>Nome do documento: {document.nome}</h1>
//             <h2>Tipo do documento: {document.tipo_documento}</h2>
//             {document.midias.map((midia, index) => (
//               <div key={index}>
//                 <h3>Título: {midia.titulo}</h3>
//                 <a
//                   href={midia.src}
//                   download={midia.src}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Baixe o documento
//                 </a>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
"use client";
import { documentGetAction } from "@/actions/processData/document-get-action";
import { InfoProcess } from "@/interfaces/process-data-types";
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";

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
        {documents.map((document) => (
          <div key={document.id} className="mb-4">
            <h1>Nome do documento: {document.nome}</h1>
            <h2>Tipo do documento: {document.tipo_documento}</h2>
            {document.midias.map((midia, index) => (
              <div key={index}>
                <h3>Título: {midia.titulo}</h3>
                <button
                  onClick={() => handleDownload(midia.src, midia.titulo)}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Baixe o documento
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
