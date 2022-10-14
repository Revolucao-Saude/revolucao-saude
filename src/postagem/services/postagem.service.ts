import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class PostagemServices {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository <Postagem>
    ) {}

    async findAll(): Promise <Postagem[]> {
    return await this.postagemRepository.find();
    }





}