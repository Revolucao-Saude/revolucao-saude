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

    async findAll(): Promise <Postagem[]> {
    return await this.postagemRepository.find();
    }

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
   async findByTexto(texto: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                texto: ILike(`%${texto}%`)
            }
        })
    }
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


    
