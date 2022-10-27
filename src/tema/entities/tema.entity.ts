import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_tema'})
export class Tema{
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length:120,  nullable:false})
    lista_assunto: string

    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    descricao: string;

    @ManyToOne(() => Postagem, (postagem) => postagem.tema, {
        onDelete: "CASCADE"
    })
    postagem: Postagem
}