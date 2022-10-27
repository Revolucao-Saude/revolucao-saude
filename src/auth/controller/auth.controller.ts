import { Body, Controller, HttpCode } from "@nestjs/common";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { UsuarioLogin } from "../entities/usuariologin.entity";

@Controller('/auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @HttpCode(LocalAuthGuard)
    @Postagem('/logar')
    async Login (@Body () user: UsuarioLogin): Promise <any> {
        return this.authService.login(user)
    }
}