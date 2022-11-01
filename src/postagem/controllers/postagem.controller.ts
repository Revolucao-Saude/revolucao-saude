import { PostagemServices } from "../services/postagem.service";
import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe} from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Delete } from "@nestjs/common";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt.auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller("/postagens")
@ApiBearerAuth()
export class PostagemController {
    constructor(private readonly postagemService: PostagemServices) {}
    /**
     * @desc 
     * @return essa função retorna todas as postagens do banco de dados
     */
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Postagem[]> {
        return this.postagemService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id:number): Promise<Postagem>{
        return this.postagemService.findById(id);   
    }  

    @Get('/texto/:texto')
    @HttpCode(HttpStatus.OK)
    findByText(@Param('texto') texto: string): Promise<Postagem[]> {
        return this.postagemService.findByTexto(texto);
    } 

    @Get('/foto-perfil/:arquivos_midia')
    @HttpCode(HttpStatus.OK)
    findByImage(@Param('arquivos_midia') arquivos_midia: string): Promise<Postagem[]> {
        return this.postagemService.findByTexto(arquivos_midia);
    } 

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }

}