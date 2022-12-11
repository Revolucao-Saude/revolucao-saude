import Tema from './Tema'

interface Postagem{
    id: number;
    texto: string;
    arquivos_midia: string;
    data_horario: string;
    local: string;
    tema?: Tema| null
}

export default Postagem;