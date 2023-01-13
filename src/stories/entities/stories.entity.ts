import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_stories'})
export class Story{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({length: 3000, nullable: false})
    @ApiProperty()
    conteudo: string;

    @ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.stories)
    usuario: Usuario; 

}