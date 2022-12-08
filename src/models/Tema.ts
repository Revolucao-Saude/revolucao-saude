import { ReactNode } from 'react';
import Tema from './Tema'

interface Postagem{
    descricao: ReactNode;
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null
}

export default Postagem;