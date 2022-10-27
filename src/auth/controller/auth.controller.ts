import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { UsuarioLogin } from "../entities/usuariologin.entity";

@Controller('/auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async Login (@Body () user: UsuarioLogin): Promise <any> {
        return this.authService.login(user)
    }
}