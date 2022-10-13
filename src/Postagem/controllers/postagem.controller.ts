import { PostagemServices } from "../services/postagem.service";
import { Controller, Get, HttpCode, HttpStatus} from "@nestjs/common";
import { Postagem } from "../entity/postagem.entities";



@Controller("/postagens")
export class PostagemController {
    constructor(private readonly postagemService: PostagemServices) {}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Postagem[]> {
        return this.postagemService.findAll();
    }
}