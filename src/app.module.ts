import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Story } from './stories/entities/story.entity';
import { StoriesModule } from './stories/stories.module';

/**
 *@desc Nessa parte fazemos a integração com o banco de dados, a propriedade synchronize definida como
  true fica responsável por indicar que as tabelas serão criadas e atualizadas
  a cada inicialização da aplicação
 */
@Module({
  imports: [
    //  TypeOrmModule.forRoot({
    //     type:'mysql',
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: 'root',
    //     database: 'db_revolucaosaude',
    //     entities: [Postagem,Tema,Usuario, Story],
    //     synchronize: true,
    //   }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    PostagemModule,
    TemaModule,
    UsuarioModule,
    StoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
