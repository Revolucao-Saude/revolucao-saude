import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import { Usuario} from '../entities/usuario.entity';
//import { Brcypt} from '../../auth/Brcypt/Brcypt';

@Injectable ()
export class UsuarioService {
  constructor (
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    //private bcrypt: Brcypt

  ) { }

  /**
     * @desc consulta o usuario pelo nome

     * @returns usuario consultado
 
     */
  async findByUsuario (usuario: string): Promise<Usuario | undefined> {
  return await this.usuarioRepository.findOne ({
        where: {
          nome: usuario
        }

  })
}

      /**
       * @desc consulta todos os usuarios cadastrados

       * @returns usuario cadastrado
 
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
     * @desc consulta o usuario pelo ID do banco de dad0s

     * @returns usuario pelo id
 
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
     * @desc cria um novo usuario
     * @param usuario Identificador para atualizar o usuario
     * @returns O conteudo atualizado
     * @throws HttpExeption Caso o usuário informado já exista
     */

async create(usuario: Usuario): Promise<Usuario>{

    let buscaUsuario = await this.findByUsuario(usuario.nome);

    if (!buscaUsuario) {
    //    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
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
    let buscaUsuario = await this.findByUsuario (usuario.nome);

    if (!updateUsuario)
    throw new HttpException ('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    if (buscaUsuario && buscaUsuario.id !== usuario.id)
        throw new HttpException('Usuário (e-mail) já cadastrado!', HttpStatus.BAD_REQUEST);


 //       usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);
}

}