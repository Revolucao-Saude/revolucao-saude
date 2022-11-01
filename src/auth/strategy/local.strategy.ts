import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy (Strategy) {
    constructor (private authService: AuthService) {
        super({
            usernameField: 'usuario',
            passwordField: 'senha'
        });

    }

    /**
     * @param username dois parâmetros do tipo string, que são o usuário e a senha
     * @desc esses parâmetros serão recebidos na autenticação do usuário (login) 
     */
    async validate (username: string, password: string): Promise <any>{
        const user = await this.authService.validateUser(username , password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}