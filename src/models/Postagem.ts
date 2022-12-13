import Tema from './Tema'
import User from './User';

interface Postagem{
    id: number;
    texto: string;
    arquivos_midia: string;
    data_horario?: Date| null;
    local: string;
    tema?: Tema| null;
    usuario: User | null;
}

export default Postagem;