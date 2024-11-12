import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from 'class-validator'
import { EmailEhUnico } from '../validator/email-eh-unico-validator'

export class AtualizaUsuarioDTO {

    @IsNotEmpty({ message: 'O Nome não pode ser vázio' })
    @IsOptional()
    nome: string

    @IsEmail(undefined, { message: 'O Email não pode ser vázio' })
    @EmailEhUnico({ message: 'Já existe usuário com esse email' })
    @IsOptional()

    email: string

    @MinLength(6, { message: 'A senha deve ser informada' })
    @IsOptional()

    senha: string

}
