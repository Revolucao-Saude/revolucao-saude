import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt.auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@ApiTags('Usuario')
@Controller("/usuarios")
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/todos')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.usuarioService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/:usuarios')
    @HttpCode(HttpStatus.OK)
    findByUsername(@Param('usuario') nome: string): Promise<Usuario>{
        return this.usuarioService.findByUsername(nome);
    }

    @HttpCode(HttpStatus.CREATED)
    @ApiBearerAuth()
    @Post('/cadastrar')
    async create (@Body() usuario: Usuario): Promise<Usuario> {
        return await this.usuarioService.create(usuario);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
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