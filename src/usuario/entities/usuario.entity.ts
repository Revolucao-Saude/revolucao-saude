import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuarios'})
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length:100, nullable:false})
    nome:string

    @IsNotEmpty()
    @Column({length: 100, nullable:false})
    email:string

    @IsNotEmpty()
    @Column({length: 30, nullable:false})
    senha:string
    
    @IsNotEmpty()
    @Column({length: 100, nullable:true})
    foto:string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario, {
        onDelete: "CASCADE"
    })
    postagem: Postagem

}