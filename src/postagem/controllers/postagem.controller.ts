import { PostagemServices } from "../services/postagem.service";
import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe} from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Delete } from "@nestjs/common";


@Controller("/postagens")
export class PostagemController {
    constructor(private readonly postagemService: PostagemServices) {}
    
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
    findByTexto(@Param('texto') texto: string): Promise<Postagem[]> {
        return this.postagemService.findByTexto(texto);
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