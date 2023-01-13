import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Story } from "src/stories/entities/stories.entity";

@Entity({name: 'tb_usuarios'})
export class Usuario{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    @ApiProperty()
    nome:string;

    @IsEmail()
    @Column({length: 255, nullable:false})
    @ApiProperty({example: "email@email.com.br"})
    email:string;

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable:false})
    @ApiProperty()
    senha:string;
    
    
    @Column({length: 5000, nullable:true})
    @ApiProperty()
    foto:string;

    @ApiProperty()
    @OneToMany(() => Postagem, (postagem) => postagem.usuario, {
        onDelete: "CASCADE"
    })
    postagem: Postagem[];

    @ApiProperty()
    @OneToMany(() => Story, (story) => story.usuario)
    story: Story[];

}