import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    
    @Column({length: 200, nullable: false})
    @ApiProperty()
    descricao: string;

    @ApiProperty()
    @OneToMany(() => Postagem, (postagem) => postagem.tema, {
        onDelete: "CASCADE"
    })
    postagem: Postagem[]
}