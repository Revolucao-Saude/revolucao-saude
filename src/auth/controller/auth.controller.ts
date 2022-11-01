import { UseGuards } from "@nestjs/common";
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../services/auth.service";

@ApiTags('Usuario')
@Controller('/auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async Login (@Body () user: UsuarioLogin): Promise <any> {
        return this.authService.login(user)
    }
}