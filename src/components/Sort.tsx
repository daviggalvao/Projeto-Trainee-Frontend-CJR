import React from "react";
import { useState } from "react";

const Sort = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-2xl bg-foreground h-1/6 w-1/12">Ordenar
      </button>
      {open ? (
        <div className="bg-background absolute rounded-2xl h-1/6 w-1/6 p-2 flex flex-col justify-center items-center">
          <div className="bg-foreground rounded-2xl h-full w-full p-2 flex flex-col justify-center items-center">
            <button className="text-white">Nome</button>
          </div>
          <br />
          <div className="bg-foreground rounded-2xl h-full w-full p-2 flex flex-col justify-center items-center">
            <button className="text-white">Matéria</button>
          </div>
          <br />
          <div className="bg-foreground rounded-2xl h-full w-full p-2 flex flex-col justify-center items-center">
            <button className="text-white">Recentes</button>
          </div>
          <br />
          <div className="bg-foreground rounded-2xl h-full w-full p-2 flex flex-col justify-center items-center">
            <button className="text-white">Antigas</button>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default Sort;