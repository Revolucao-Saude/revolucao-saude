import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {DeleteResult, Repository} from 'typeorm';
import { Usuario} from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';
@Injectable ()
export class UsuarioService {
  constructor (
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt

  ) {}

  /**
     * @desc Consulta o usuario pelo nome

     * @returns Usuário consultado
 
     */
 
  async findByUsername (usuario: string): Promise<Usuario> {
  return await this.usuarioRepository.findOne ({
        where: {
          email: usuario
        },
        relations:{
          postagem: true
        }

  })
}

      /**
       * @desc Consulta todos os Usuários cadastrados

       * @returns Usuário cadastrado
 
      */

async findAll (): Promise<Usuario[]> {
    return await this.usuarioRepository.find (
        {
            relations:{
                postagem: true 
            }
        }
);
    }

      /**
     * @desc Consulta o Usuário pelo ID do Banco de Dadoss

     * @returns usuario pelo ID
 
     */

    async findById (id: number): Promise<Usuario> {
      let usuario = await this.usuarioRepository.findOne({
        where: {
            id
          },
          relations: {
            postagem: true
          }
 });
 if (!usuario)
 throw new HttpException ('Usuario não encontrado !',HttpStatus.NOT_FOUND);

    return usuario;
}

/**
     * @desc Cria um novo usuário
     * @param usuario Identificador para atualizar o usuario
     * @returns O conteudo atualizado
     * @throws HttpExeption Caso o usuário informado já exista
     */

async create(usuario: Usuario): Promise<Usuario>{

    let buscaUsername = await this.findByUsername(usuario.nome);

    if (!buscaUsername) {
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save (usuario);
    }

throw new HttpException ("O Usuario ja existe!", HttpStatus.BAD_REQUEST);


}


/**
     * @desc Atualiza o Usuário no banco de dados
     * @param usuario Identificador para atualizar o usuário
     * @returns O conteudo atualizado
     * @throws HttpExeption Caso o usuário informado não seja encontrado
     */

async update (usuario: Usuario): Promise<Usuario>{

    let updateUsuario: Usuario = await this.findById(usuario.id);
    let buscaUsuario = await this.findByUsername (usuario.nome);

    if (!updateUsuario)
    throw new HttpException ('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    if (buscaUsuario && buscaUsuario.id !== usuario.id)
        throw new HttpException('Usuário (e-mail) já cadastrado!', HttpStatus.BAD_REQUEST);


        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);
}

    
/**
     * @desc Apaga um usuário do banco de dados
     * @param id O identificador do usuário a ser apagado
     * @returns Conteúdo vazio 
     * @throws HttpException Caso o ID informado não seja encontrado
     * @example
     * delete(2); // Será apagado o tema com o id = 2
     */

async delete (id: number): Promise <DeleteResult> {

  let buscaUsuario = await this.findById(id);

  if (!buscaUsuario)
    throw new HttpException( ' Usuario não encontrado ', HttpStatus.NOT_FOUND );

      return await this.usuarioRepository.delete(id);
}

}