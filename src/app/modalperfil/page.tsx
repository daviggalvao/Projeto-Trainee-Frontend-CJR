'use client';

import Image from "next/image";
import '../styles/globals.css';
import styles from '../styles/login.module.css';
import stylespfp from '../styles/regpfp.module.css';
import stylesmp from '../styles/modalp.module.css';

export default function Home() {
  return (


      <div className = {styles.metadedir}>

      <Image src="https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain" 
      alt = "Foto de perfil não cadastrada" className = {stylespfp.pfp} width={100} height ={100}/>
          
          <form>
              <label htmlFor="nome"></label><br/>
              <input className = {stylesmp.buttonm} type="name" id="nome" name="nome" placeholder = "Nome"/>

              <label htmlFor="email"></label><br/>
              <input className = {stylesmp.buttonm} type="email" id="email" name="email" placeholder = "Email"/>

              <label htmlFor="curso"></label><br/>
              <input className = {stylesmp.buttonm} type="name" id="curso" name="curso" placeholder = "Curso"/>

              <label htmlFor="departamento"></label><br/>
              <input className = {stylesmp.buttonm} type="name" id="departamento" name="departamento" placeholder = "Departamento"/>

              <label htmlFor="senha"></label><br/>
              <input className = {stylesmp.buttonm} type="password" id="senha" name="senha" placeholder = "Senha atual"/>

              <label htmlFor="senha"></label><br/>
              <input className = {stylesmp.buttonm} type="password" id="senha" name="senha" placeholder = "Nova senha"/>

              <label htmlFor="senha"></label><br/>
              <input className = {stylesmp.buttonm} type="password" id="senha" name="senha" placeholder = "Confirmar nova senha"/>
          </form> 

          <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
            <button className = {styles.buttonc}>Salvar</button>
          </div>

      </div>

  );
}
