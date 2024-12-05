'use client';

import { useState } from 'react';
import '../styles/globals.css';
import stylesmc from '../styles/modal.module.css';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
      <div className={stylesmc.d}>
        <button onClick={() => setOpen(!open)} className={stylesmc.buttonc}>Comentar</button>
        {open ? (
            <div className={`h-full w-full bg-black/40 fixed top-0 left-0 transition-all ${open? "opacity-100" : "opacity-0"}`}>
              <br />
                <div className={stylesmc.caixam}>
                  <div className="flex-1 outline-none w-full text-start flex text-wrap rounded-3xl">
                      <textarea className="outline-none bg-foreground resize-none w-full" id="comment"/>
                  </div>
                  <div className={stylesmc.space}>
                    <button className = {stylesmc.buttonc}>Comentar</button>
                    <button onClick={() => setOpen(!open)} className = {stylesmc.buttonc}>Apagar</button>
                    <div className={stylesmc.spacei}>
                        <button onClick={() => setOpen(!open)} className = {stylesmc.buttonc}>Sair</button>
                    </div>
                  </div>
                </div>
            </div>
        ) : (<div className={stylesmc.hide}></div>)}
      </div>
  );
}