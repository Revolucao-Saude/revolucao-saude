import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_stories'})
export class Story{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({length: 3000, nullable: false})
    @ApiProperty()
    conteudo: string;

    @ApiProperty({ type: () => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.story, {
        onDelete: 'CASCADE'
    })
    usuario: Usuario; 

}