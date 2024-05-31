"use client";
import { useUser } from "@/context/user-context";
import { Data } from "../Data";
import { ServicosInicio } from "./ServicosInicio";
import { ProcessosInicio } from "./ProcessosInicio";

export default function Inicio() {
  const { user } = useUser();

  return (
    <main className="bg-menu flex justify-between py-0 pr-0">
      <section>
        <div className="m-10 pt-14">
          <h1 className="text-7xl font-semibold mb-2 text-blue-color-text">{`Olá,${user?.nome} ${user?.sobrenome}`}</h1>
          <Data />
        </div>
        <ServicosInicio />
      </section>
      <section className="flex">
        <ProcessosInicio />
      </section>
    </main>
  );
}
