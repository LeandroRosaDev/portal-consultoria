export interface Media {
  src: string;
  tipo: string;
  titulo: string;
}

export interface InfoProcess {
  id: string;
  midias: Media[];
  nome: string;
  tipo_documento: string;
  usuario_id: string;
}
