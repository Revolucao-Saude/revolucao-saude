import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Testes dos Módulos Usuário e Auth (e2e)', () => {
  let token: any;
  let usuarioId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
        type:'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database:'db_revolucaosaude_test',
        synchronize: true,
        autoLoadEntities: true,
        logging: false,
        dropSchema: true
      }),
      AppModule
    ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

  });

  afterAll(async () => {
    await app.close()
  });

  /**
   * @desc verifica se o usuário está sendo criado no banco de dados.
   */
  it('01 - Deve Cadastrar Usuário', async () => {
    const resposta = await request(app.getHttpServer())
    .post('/usuario/cadastrar')
    .send({
      nome:'Root',
      email: 'root@root.com',
      senha: 'rootroot',
      foto: ' '
    });
    expect(HttpStatus.CREATED)
    
    usuarioId = resposta.body.id
  });

  /**
   * @desc realiza o login do usuário e verifica se está autenticando com o banco de dados.
   */
  it('02 - Deve Autenticar Usuário (login)', async () => {
    const resposta = await request(app.getHttpServer())
    .post('/auth/logar')
    .send({
      email: 'root@root.com',
      senha: 'rootroot'
    });
    expect(HttpStatus.OK)

    token = resposta.body.token;
  });

  /**
   * @desc cadastra um novo usuário no banco de dados e verifica se ele está realizando cadastro duplicado.
   */
  it('03 - Não Deve Duplicar O Usuário', async() => {
    request(app.getHttpServer())
    .post('/usuario/cadastrar')
    .send({
      nome:'Root',
      email: 'root@root.com',
      senha: 'rootroot',
      foto: ' '
    });
    expect(HttpStatus.BAD_REQUEST)
  });

  /**
   * @desc realiza a listagem de todos os usuários cadastrados no sistema.
   */
  it('04 - Deve Listar Todos Os Usuários', async() => {
    request(app.getHttpServer())
    .get('/usuario/all')
    .set('Authorization', `${token}`)
    .send({})

    expect(HttpStatus.OK)
  });

  /**
   * @desc atualiza uma informação específica de um usuário já existente no banco de dados do sistema.
   */
  it('05 - Deve Atualizar Um Usuário', async () => {
    request(app.getHttpServer())
    .put('/usuario/atualizar')
    .set('Authorization', `${token}`)
    .send({
      id: usuarioId,
      nome:'Root Atualizado',
      email: 'root@root.com',
      senha: 'rootroot',
      foto: ' '
    })
    .then(resposta => {
      expect('Root Atualizado').toEqual(resposta.body.name)
    })
    expect(HttpStatus.OK)
  });

});
