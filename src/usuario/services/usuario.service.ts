import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {DeleteResult, Repository} from 'typeorm';
import { Usuario} from '../entities/usuario.entity';
//import { Brcypt} from '../../auth/Brcypt/Brcypt';

@Injectable ()
export class UsuarioService {
  constructor (
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    //private bcrypt: Brcypt

  ) { }
  async findByUsername (usuario: string): Promise<Usuario | undefined> {
  return await this.usuarioRepository.findOne ({
        where: {
          nome: usuario
        },
        relations:{
          postagem: true
        }

  })
}
async findAll (): Promise<Usuario[]> {
    return await this.usuarioRepository.find (
        {
            relations:{
                postagem: true 
            }
        }
);
    }
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

async create(usuario: Usuario): Promise<Usuario>{

    let buscaUsuario = await this.findByUsername(usuario.nome);

    if (!buscaUsuario) {
    //    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save (usuario);
    }

throw new HttpException ("O Usuario ja existe!", HttpStatus.BAD_REQUEST);


}

async update (usuario: Usuario): Promise<Usuario>{

    let updateUsuario: Usuario = await this.findById(usuario.id);
    let buscaUsuario = await this.findByUsername (usuario.nome);

    if (!updateUsuario)
    throw new HttpException ('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    if (buscaUsuario && buscaUsuario.id !== usuario.id)
        throw new HttpException('Usuário (e-mail) já cadastrado!', HttpStatus.BAD_REQUEST);


 //       usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);
}

async delete (id: number): Promise <DeleteResult> {

  let buscaUsuario = await this.findById(id);

  if (!buscaUsuario)
    throw new HttpException( ' Usuario não encontrado ', HttpStatus.NOT_FOUND );

      return await this.usuarioRepository.delete(id);
}

}