"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="bg-foreground flex flex-col justify-center items-center">
        <Image
          src="logounb.svg"
          alt="Logo UnB"
          className="flex basis-2/4 h-1/2 w-1/3"
          width={10}
          height={10}
        />
      </div>
      <div className="flex basis-2/4 flex-col justify-center items-center bg-background">
        <h1 className="text-center text-white text-7xl font-bold">Avalia aê</h1>
        <form className="text-black w-3/5 my-4">
          <label htmlFor="email"></label>
          <br />
          <input
            className="text-center relative w-full mb-3 p-5 rounded-3xl"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <label htmlFor="senha"></label>
          <br />
          <input
            className="text-center relative w-full mb-3 p-5 rounded-3xl"
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
          />
        </form>

        <div className="flex space-x-4">
          <Link href="../">
            <button className="text-center bg-foreground text-white p-5 rounded-2xl">
              Fazer Login
            </button>
          </Link>
          <Link href="/register">
            <button className="text-center bg-foreground text-white p-5 rounded-2xl">
              Criar Conta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
