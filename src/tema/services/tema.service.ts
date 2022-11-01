import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {  InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository} from "typeorm";
import { Tema } from "../entities/tema.entity";

@Injectable()
export class TemaService {
    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository <Tema>
    ) { }

          /**
       * @desc Consulta todos os Temas do Banco de Dados

       * @returns Tema no Banco de Dados
 
      */

    async findAll (): Promise<Tema[]>{
        return await this.temaRepository.find({
            relations: {
                postagem: true
            }
        });
    }

          /**
     * @desc Consulta o Tema pelo ID do Banco de Dados

     * @returns Tema pelo ID
 
     */

    async findById(id: number): Promise <Tema> {
        let tema = await this.temaRepository.findOne({
          where: {
            id
          },
          relations: {
            postagem: true
          }
        });
        if (!tema)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
        
        return tema;    
    }

    /**
     * 
     * @desc Cria uma Descrição
     * @returns Uma Descrição
     */

    async findByDescricao( descricao: string): Promise<Tema[]> {
        return await this.temaRepository.find ({
            where: {
                descricao: ILike (`%${descricao}%`)
            },
            relations: {
                postagem: true
            }
        });
    }

    /**
     * @desc Cria um novo Tema
     * @param tema Identificador para atualizar o Tema
     * @returns O conteudo atualizado
     */



    async create (Tema: Tema): Promise<Tema>{
        return await this.temaRepository.save(Tema);
    }

    /**
     * @desc Atualiza o Tema no banco de dados
     * @param tema Identificador para atualizar o tema
     * @returns O conteudo atualizado
     * @throws HttpExeption Caso o Tema informado não seja encontrado
     */

    async update(tema: Tema): Promise <Tema> {
        let buscaTema = await this.findById (tema.id);
        
        if (!buscaTema || !tema.id)
        throw new  HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

        return await this.temaRepository.save(tema);
    }

    /**
     * @desc Apaga um Tema do banco de dados
     * @param id O identificador do tema a ser apagado
     * @returns Conteudo vazio 
     * @throws HttpException Caso o ID informado não seja encontrado
     * @example
     * delete(2); // Será apagado o tema com o id = 2 
     */

    async delete (id: number): Promise<DeleteResult> {
        let buscaTema = await this.findById(id);

        if (!buscaTema)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
            return await this.temaRepository.delete(id)
    }
}