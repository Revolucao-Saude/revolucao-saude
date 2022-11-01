import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'tb_tema'})
export class Tema{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({length:120,  nullable:false})
    @ApiProperty()
    lista_assunto: string

    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    @ApiProperty()
    descricao: string;

    @ApiProperty()
    @ManyToOne(() => Postagem, (postagem) => postagem.tema, {
        onDelete: "CASCADE"
    })
    postagem: Postagem
}