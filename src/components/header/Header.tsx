import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed w-full h-fit felx items-center bg-midwaybasecolor text-slate-50 p-4">
      <nav className="flex items-center justify-between m-auto max-w-screen-xl">
        <Link href="/">Home</Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>sair</li>
        </ul>
      </nav>
    </header>
  );
};
