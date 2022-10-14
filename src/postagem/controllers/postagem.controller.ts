import { PostagemServices } from "../services/postagem.service";
import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe} from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";



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
}