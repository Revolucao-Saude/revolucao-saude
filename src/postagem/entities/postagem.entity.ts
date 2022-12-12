import { IsNotEmpty } from "class-validator";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'tb_postagem'})

export class Postagem{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable:false})
    texto: string;

    @ApiProperty()
    @Column({length: 300, nullable:true})
    arquivos_midia: string;

    @ApiProperty()
    @UpdateDateColumn()
    data_horario: Date;

    @ApiProperty()
    @Column({length: 200, nullable:true})
    local: string;

    @ApiProperty({ type: () => Tema})
    @OneToMany(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}