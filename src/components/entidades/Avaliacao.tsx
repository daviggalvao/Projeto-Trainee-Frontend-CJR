import React from 'react'
import { AvaliacaoData } from '../../types/Avaliacao'; 
import { hookUserID } from '@/hooks/hookUser';
import Link from "next/link";
import Image from "next/image";
import styles from '../aa_extra/styles/feed.module.css';
import commentUser from '../../assets/comment.svg';
import defaultFoto from '../../assets/fotodefault.svg';  // Caminho para a imagem local

const Avaliacao = ( Avaliacao : AvaliacaoData) => {
  const user = hookUserID(Avaliacao.usuarioID)
  return (
    <div className = "bg-green-500 rounded-3xl w-4/5 mt-5 mb-5">

      <div className = "flex items-center gap-2">

        <Image src={
          user?.foto_perfil && typeof user.foto_perfil === "string"
          ? user.foto_perfil
          : defaultFoto
          } alt="Foto do Usuário" 
          className= " ml-2 w-10 h-10 border-2 border-black rounded-full mt-4 mb-2" width={25} height={25}/>

        <h3 className = "text-xs font-bold">{user?.nome}</h3>

        <h4 className="text-xs font-light">
          {Avaliacao.createdAt
            ? new Date(Avaliacao.createdAt).toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })
            : 'Data não disponível'}
         </h4>

        <h4 className = "text-xs font-light">{Avaliacao.professor}</h4>
        <h4 className = "text-xs font-light">{Avaliacao.disciplina}</h4>

      </div>

      <p className=" ml-12 font-medium text-sm mr-2">{Avaliacao.conteudo}</p>
      
      <div className = "ml-12 flex items-center gap-2 mb-4">
        <Image src = {commentUser} alt = "icone comentário" className = ""  width={25} height={25}/>
        <Link href={`/Avaliacao/${Avaliacao.id}`}>
          <p className = "font-medium text-xs">{Avaliacao.Comentarios.length} comentário(s)</p>
        </Link>
      </div>

    </div>
  )
}

export default Avaliacao;