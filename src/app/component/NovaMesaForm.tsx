"use client"

import { useEffect, useRef } from "react";


export default function FormNMesa(){
    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(()=>{
      dialogRef.current?.showModal()
    },[])
    return (
      <>
    
    <label htmlFor="Titulo" className="text-2xl mt-2">
      Titulo
    </label>
    <input type="text" name="Titulo" id="Titulo" className="w-full p-2" />
    <label htmlFor="Sistema" className="text-2xl mt-2">
      Sistema
    </label>
    <input
      type="text"
      name="Sistema"
      id="Sistema"
      className="w-full p-2"
    />
    <label htmlFor="Descrição" className="text-2xl mt-2">
      Descrição
    </label>
    <textarea
      name="Descrição"
      id="Descrição"
      className="w-full h-32 p-2"
    />

    <button className="p-2 bg-color1-1-200 text-color1-2-300 font-medium mt-2 w-full">
      Criar minha mesa!
    </button>
    </>
)
}