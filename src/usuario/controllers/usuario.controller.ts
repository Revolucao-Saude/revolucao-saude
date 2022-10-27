import { UseGuards } from "@nestjs/common";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Put } from "@nestjs/common";
import { Param } from "@nestjs/common/decorators";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { JwtAuthGuard } from "../../auth/guard/jwt.auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@Controller("/usuarios")
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/todos')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.usuarioService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:usuarios')
    @HttpCode(HttpStatus.OK)
    findByUsername(@Param('usuario') nome: string): Promise<Usuario>{
        return this.usuarioService.findByUsername(nome);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    async create (@Body() usuario: Usuario): Promise<Usuario> {
        return await this.usuarioService.create(usuario);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }


 /* Caso queira utilizar descomente o Delete

    @Delete('/:id')
    @HttpCode( HttpStatus.NO_CONTENT )
    delete(@Param('id', ParseIntPipe) id: number){
        return this.usuarioService.delete(id);
    }
 */
}