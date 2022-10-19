import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import {Postagem} from "../entities/postagem.entity";

@Injectable()
export class PostagemServices {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository <Postagem>
    ) {}
    /**
     * @returns Essa função promete retornar uma Promise contendo um array de Objetos 
     * @desc pelo fato do método findAll() listar varios Objetos é necessário criar um array para
     * armazenar todos os objetos
     */
    async findAll(): Promise <Postagem[]> {
    return await this.postagemRepository.find();
    }

    /**
     * @Desc Diferentemente do método findAll que lista vários objetos, o findById lista por um objeto
     * específico, fazendo se necessário criar apenas um Objeto da classe postagem 
     * @param id é o id que a postagem está armazenada 
     * @returns Essa função promete retorrnar um objeto específico que no caso é a postagem
     */
    async findById (id:number): Promise<Postagem> {
        let postagem = await this.postagemRepository.findOne({
            where: {
                id
            }
        });

        if(!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return postagem;
    }

    /**
     * 
     * @param texto Armazena os textos das postagens que serão publicadas nas redes socias  
     * @returns retorna uma Promise contendo um array de objetos da classe postagem,também se faz necessário
     * criar um array para armazenar todos os Objetos encontrados
     */
   async findByTexto(texto: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                texto: ILike(`%${texto}%`)
            }
        })
    }
    /**
     * 
     * @param postagem essa váriavel armazena as postagens que os usuários farão
     * @returns retorna uma Promise contendo um Objeto da classe postagem, será utilizado para 
     * criar as postagens
     */
    async create (postagem: Postagem): Promise<Postagem>{;
        return await this.postagemRepository.save(postagem);
    }

    async update (postagem: Postagem): Promise<Postagem>{

        let buscaPostagem: Postagem = await this.findById(postagem.id);

        if (!buscaPostagem || !postagem.id)
            throw new HttpException('Postagem não encontrada!' , HttpStatus.NOT_FOUND);
        
        return await this.postagemRepository.save(postagem)
    }   

    async delete (id : number): Promise<DeleteResult> {

        let buscaPostagem = await this.findById(id);

        if (!buscaPostagem)
            throw new HttpException ('Postagem não encontrada!' , HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);
    }
}


    
