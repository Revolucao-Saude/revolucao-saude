import { IsNotEmpty } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'tb_postagem'})

export class Postagem{
    @PrimaryGeneratedColumn()
    id:number;

    @IsNotEmpty()
    @Column({length: 1000, nullable:false})
    texto: string;

    @IsNotEmpty()
    @Column({length: 200, nullable:true})
    arquivos_midia: string;

    @UpdateDateColumn()
    data_horario: Date;

    @Column({length: 200, nullable:true})
    local: string;

    @OneToMany(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}