"use client";
import FormNMesa from "@/app/component/NovaMesaForm";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef } from "react";

export default function novaMesa() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);
  return (
    <section className="h-full w-full bg-black/50 flex flex-col justify-center items-center z-10 absolute top-0 left-0">
      <dialog
        ref={dialogRef}
        onClose={() => router.back()}
        className="flex flex-col items-center p-5 h-96 w-96 bg-color1-2-500 text-zinc-900"
      >
        <span className="flex justify-between items-center w-full">
          <h1 className="text-xl text-zinc-800 font-semibold">Criar uma nova mesa!</h1>
          <IoMdClose
            onClick={() => dialogRef.current?.close()}
            className="text-zinc-800 h-7 w-7 flex flex-row justify-end cursor-pointer font-medium"
          />
        </span>
        <FormNMesa />
      </dialog>
    </section>
  );
}
